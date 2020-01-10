import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { firestore, auth } from './state/firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './state/store';
import { DEFAULT_PERSIST, CURRENT_VERSION, PersistState } from './state/schema';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { migratePeristState } from './state/migrations';
import thunk from 'redux-thunk';
import { setUser } from './state/ducks/user';
import { firebaseMiddleware } from './state/firebaseMiddleware';
import { Unsubscribe } from 'firebase';
import { setPersistState } from './state/ducks/persist';
import firebase from 'firebase/app';

const LOCALSTORAGE_KEY = 'timetableState';

const previousJSON = localStorage.getItem(LOCALSTORAGE_KEY);

const previousState = previousJSON !== null ? JSON.parse(previousJSON) : DEFAULT_PERSIST;
const migratedState = migratePeristState(previousState, CURRENT_VERSION);

const saveState = (s: PersistState) => {
  console.log('saving to localStorage');
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(s));
}

if (migratedState) {
  saveState(migratedState);
}

const rootStore = createStore(rootReducer, migratedState ?? previousState,
  applyMiddleware(firebaseMiddleware, thunk));

rootStore.subscribe(() => {
  const state = rootStore.getState();
  saveState(state);
});


type DatabaseCallback = (a: firebase.database.DataSnapshot, b?: string | null) => any;
let unsubFirebase: Unsubscribe | null = null;
let unsubSnapshot: Function | null = null;
let firstUser = true;

auth.onAuthStateChanged((user) => {
  unsubFirebase?.();
  // if (unsubSnapshot && docRef) {
  //   docRef.off('value', unsubSnapshot);
  // }
  unsubSnapshot?.();

  unsubFirebase = null;
  unsubSnapshot = null;
  console.log('auth state changed: ' + user?.uid);
  if (user) {
    const docRef = firestore.collection('users').doc(user.uid);
    unsubSnapshot = docRef.onSnapshot((doc) => {
      console.log('got snapshot from firebase');
      if (doc?.exists) {
        // previous data exists. load from online.
        const data = doc.data()! as PersistState;
        rootStore.dispatch(setPersistState(data));
      } else {
        // no previous data exists. upload our data.
        docRef?.set(rootStore.getState());
      }

      if (!unsubFirebase) {
        unsubFirebase = rootStore.subscribe(() => {
          console.log('uploading to firebase.');
          // console.log(rootStore.getState());
          docRef?.set(rootStore.getState());
        });
      }
    });
  } else {
    if (!firstUser) {
      // rootStore.dispatch(setPersistState(DEFAULT_PERSIST));
    }
  }
  firstUser = false;
  rootStore.dispatch(setUser(user));
});


// if (auth.isSignInWithEmailLink(window.location.href)) {
//   new firebaseui.auth.AuthUI(auth).start('#root', firebaseUIConfig);
// } else 

ReactDOM.render(
  <Provider store={rootStore}><App /></Provider>,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
