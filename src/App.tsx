import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import _ from 'lodash';


import DayColumn from './DayColumn';
import TimeColumn from './TimeColumn';
import Timetable from './Timetable';

import FileInput from './FileInput';

const App: React.FC = () => {
  const [file, setFile] = useState<File>();

  const onClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    const f = new FileReader();
    f.onload = () => {
      console.log(f.result);
    };
    f.readAsText(file as Blob);

  };

  return (
    <div className="container">
      <div className="section">
        <h1 className="title">UQ Toilet Paper 🧻</h1>
        <p className="block">So you can plan your timetable in peace. Responsive!</p>
        <form className="form block">
          <div className="field">
            <FileInput className="control" fileName={file && file.name} setFile={setFile}></FileInput>
          </div>
          <div className="field">
            <div className="control">
              <button disabled={!file} className="button is-link" onClick={onClick}>Upload</button>
            </div>
          </div>

        </form>

        <Timetable></Timetable>
        
      </div>
    </div>
  );
}

export default App;
