import { EMPTY_TIMETABLE, TimetablesState } from "./types"
import uuidv4 from 'uuid/v4';

export type UserState = {
    uid: string,
    name: string | null,
    email: string | null,
    photo: string | null,
    phone: string | null,
    providers: string[] | null,
    isAnon: boolean,
} | null;

export type StateMetadata<T = number> = {
    _meta?: {
        version: T,
    }
}

export type PersistState = {
    timetables: TimetablesState,
    current: string,
    user: UserState,
} & StateMetadata<13>;

export const CURRENT_VERSION = 13;

// const testData = [{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"LEC1","group":"01","day":1,"time":{"hour":9,"minute":0},"campus":"STLUC","location":"07-222 - Parnell Building, Lecture Theatre","duration":60,"dates":"25/2-7/4, 21/4-26/5","activityType":"LEC"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"LEC2","group":"01","day":3,"time":{"hour":10,"minute":0},"campus":"STLUC","location":"07-222 - Parnell Building, Lecture Theatre","duration":60,"dates":"27/2-9/4, 23/4-28/5","activityType":"LEC"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"LEC3","group":"01","day":4,"time":{"hour":10,"minute":0},"campus":"STLUC","location":"07-222 - Parnell Building, Lecture Theatre","duration":60,"dates":"28/2-10/4, 24/4-29/5","activityType":"LEC"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"01","day":1,"time":{"hour":10,"minute":0},"campus":"STLUC","location":"83-C416 - Hartley Teakle Building, Collaborative Room","duration":60,"dates":"3/3-7/4, 21/4-26/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"02","day":0,"time":{"hour":9,"minute":0},"campus":"STLUC","location":"32-208 - Gordon Greenwood Building, Collaborative Room","duration":60,"dates":"2/3-6/4, 20/4-25/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"03","day":1,"time":{"hour":12,"minute":0},"campus":"STLUC","location":"09-222 - Michie Building, Tutorial Room","duration":60,"dates":"3/3-7/4, 21/4-26/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"04","day":1,"time":{"hour":11,"minute":0},"campus":"STLUC","location":"78-224 - General Purpose South, Collaborative Room","duration":60,"dates":"3/3-7/4, 21/4-26/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"05","day":0,"time":{"hour":10,"minute":0},"campus":"STLUC","location":"78-224 - General Purpose South, Collaborative Room","duration":60,"dates":"2/3-6/4, 20/4-25/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"06","day":3,"time":{"hour":11,"minute":0},"campus":"STLUC","location":"78-224 - General Purpose South, Collaborative Room","duration":60,"dates":"5/3-9/4, 23/4-28/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"07","day":3,"time":{"hour":12,"minute":0},"campus":"STLUC","location":"78-224 - General Purpose South, Collaborative Room","duration":60,"dates":"5/3-9/4, 23/4-28/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"08","day":3,"time":{"hour":13,"minute":0},"campus":"STLUC","location":"78-224 - General Purpose South, Collaborative Room","duration":60,"dates":"5/3-9/4, 23/4-28/5","activityType":"TUT"},{"course":"STAT3001_S1_STLUC_IN","description":"Mathematical Statistics","activity":"LEC1","group":"01","day":0,"time":{"hour":14,"minute":0},"campus":"STLUC","location":"05-213 - Richards Building, Lecture Theatre","duration":60,"dates":"24/2-6/4, 20/4-25/5","activityType":"LEC"},{"course":"STAT3001_S1_STLUC_IN","description":"Mathematical Statistics","activity":"LEC2","group":"01","day":2,"time":{"hour":13,"minute":0},"campus":"STLUC","location":"76-228 - Molecular Biosciences, Lecture Theatre","duration":60,"dates":"26/2-8/4, 22/4-27/5","activityType":"LEC"},{"course":"STAT3001_S1_STLUC_IN","description":"Mathematical Statistics","activity":"LEC3","group":"01","day":4,"time":{"hour":14,"minute":0},"campus":"STLUC","location":"81-313 - Otto Hirschfeld Building, Lecture Theatre","duration":60,"dates":"28/2-10/4, 24/4-29/5","activityType":"LEC"},{"course":"STAT3001_S1_STLUC_IN","description":"Mathematical Statistics","activity":"TUT1","group":"01","day":3,"time":{"hour":13,"minute":0},"campus":"STLUC","location":"09-201 - Michie Building, Tutorial Room","duration":60,"dates":"5/3-9/4, 23/4-28/5","activityType":"TUT"},{"course":"STAT3001_S1_STLUC_IN","description":"Mathematical Statistics","activity":"TUT1","group":"02","day":4,"time":{"hour":15,"minute":0},"campus":"STLUC","location":"35-215 - Chamberlain Building, Tutorial Room","duration":60,"dates":"6/3-10/4, 24/4-29/5","activityType":"TUT"},{"course":"STAT3001_S1_STLUC_IN","description":"Mathematical Statistics","activity":"TUT1","group":"03","day":3,"time":{"hour":8,"minute":0},"campus":"STLUC","location":"35-207 - Chamberlain Building, Tutorial Room","duration":60,"dates":"5/3-9/4, 23/4-28/5","activityType":"TUT"},{"course":"STAT3004_S1_STLUC_IN","description":"Probability Models & Stochastic Processes","activity":"LEC1","group":"01","day":1,"time":{"hour":11,"minute":0},"campus":"STLUC","location":"03-309 - Steele Building, Lecture Theatre","duration":60,"dates":"25/2-7/4, 21/4-26/5","activityType":"LEC"},{"course":"STAT3004_S1_STLUC_IN","description":"Probability Models & Stochastic Processes","activity":"LEC2","group":"01","day":3,"time":{"hour":9,"minute":0},"campus":"STLUC","location":"03-309 - Steele Building, Lecture Theatre","duration":60,"dates":"27/2-9/4, 23/4-28/5","activityType":"LEC"},{"course":"STAT3004_S1_STLUC_IN","description":"Probability Models & Stochastic Processes","activity":"LEC3","group":"01","day":4,"time":{"hour":11,"minute":0},"campus":"STLUC","location":"07-222 - Parnell Building, Lecture Theatre","duration":60,"dates":"28/2-10/4, 24/4-29/5","activityType":"LEC"},{"course":"STAT3004_S1_STLUC_IN","description":"Probability Models & Stochastic Processes","activity":"TUT1","group":"01","day":4,"time":{"hour":12,"minute":0},"campus":"STLUC","location":"09-803 - Michie Building, Tutorial Room","duration":60,"dates":"6/3-10/4, 24/4-29/5","activityType":"TUT"},{"course":"STAT3004_S1_STLUC_IN","description":"Probability Models & Stochastic Processes","activity":"TUT1","group":"02","day":4,"time":{"hour":13,"minute":0},"campus":"STLUC","location":"09-803 - Michie Building, Tutorial Room","duration":60,"dates":"6/3-10/4, 24/4-29/5","activityType":"TUT"},{"course":"STAT3004_S1_STLUC_IN","description":"Probability Models & Stochastic Processes","activity":"TUT1","group":"03","day":4,"time":{"hour":15,"minute":0},"campus":"STLUC","location":"09-803 - Michie Building, Tutorial Room","duration":60,"dates":"6/3-10/4, 24/4-29/5","activityType":"TUT"},{"course":"COMP4403_S1_STLUC_IN","description":"Compilers and Interpreters","activity":"LEC1","group":"01","day":0,"time":{"hour":8,"minute":0},"campus":"STLUC","location":"05-213 - Richards Building, Lecture Theatre","duration":120,"dates":"24/2-6/4, 20/4-25/5","activityType":"LEC"},{"course":"COMP4403_S1_STLUC_IN","description":"Compilers and Interpreters","activity":"LEC2","group":"01","day":1,"time":{"hour":11,"minute":0},"campus":"STLUC","location":"81-313 - Otto Hirschfeld Building, Lecture Theatre","duration":60,"dates":"25/2-7/4, 21/4-26/5","activityType":"LEC"},{"course":"COMP4403_S1_STLUC_IN","description":"Compilers and Interpreters","activity":"TUT1","group":"01","day":1,"time":{"hour":12,"minute":0},"campus":"STLUC","location":"49-316 - Advanced Engineering Building, Simulation & Modelling 1","duration":60,"dates":"25/2-7/4, 21/4-26/5","activityType":"TUT"},{"course":"COMP4403_S1_STLUC_IN","description":"Compilers and Interpreters","activity":"TUT1","group":"02","day":1,"time":{"hour":13,"minute":0},"campus":"STLUC","location":"49-316 - Advanced Engineering Building, Simulation & Modelling 1","duration":60,"dates":"25/2-7/4, 21/4-26/5","activityType":"TUT"},];

const DEFAULT_CURRENT = uuidv4();

export const BLANK_PERSIST: PersistState = {
    timetables: {},
    current: 'a blank state has no timetables',
    user: null,
    _meta: {
        version: CURRENT_VERSION
    }
}

export const DEFAULT_PERSIST: PersistState = {
    ...BLANK_PERSIST,
    timetables: {
        // [DEFAULT_CURRENT]: {
        //     name: 'default',
        //     allSessions: testData,
        //     selectedGroups: {"MATH3401_S1_STLUC_IN":{"LEC1":"01","LEC2":"01","LEC3":"01","TUT1":"01"},"STAT3001_S1_STLUC_IN":{"LEC1":"01","LEC2":"01","LEC3":"01","TUT1":"01"},"STAT3004_S1_STLUC_IN":{"LEC1":"01","LEC2":"01","LEC3":"01","TUT1":"01"},"COMP4403_S1_STLUC_IN":{"LEC1":"01","LEC2":"01","TUT1":"01"}},
        // },
        [DEFAULT_CURRENT]: EMPTY_TIMETABLE,
    },
    current: DEFAULT_CURRENT,
}