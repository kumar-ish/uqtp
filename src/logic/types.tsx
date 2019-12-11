export type ClockTime = {
    hour: number, minute: number,
};

export enum DayOfWeek {
    Monday = 0, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
}

export type CourseSession = {
    course: string,
    description: string, 
    activity: string, 
    activityType: string,
    group: string,

    dates: string,

    day: DayOfWeek,
    time: ClockTime, 
    campus: string,
    location: string, 
    /** Duration of activity is in minutes. */
    duration: number,
}

export type TimetableState = {
    allSessions: CourseSession[],
    //enabledActivities: CourseActivity[]
}

const testData = [{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"LEC1","group":"01","day":1,"time":{"hour":9,"minute":0},"campus":"STLUC","location":"07-222 - Parnell Building, Lecture Theatre","duration":60,"dates":"25/2-7/4, 21/4-26/5","activityType":"LEC"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"LEC2","group":"01","day":3,"time":{"hour":10,"minute":0},"campus":"STLUC","location":"07-222 - Parnell Building, Lecture Theatre","duration":60,"dates":"27/2-9/4, 23/4-28/5","activityType":"LEC"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"LEC3","group":"01","day":4,"time":{"hour":10,"minute":0},"campus":"STLUC","location":"07-222 - Parnell Building, Lecture Theatre","duration":60,"dates":"28/2-10/4, 24/4-29/5","activityType":"LEC"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"01","day":1,"time":{"hour":10,"minute":0},"campus":"STLUC","location":"83-C416 - Hartley Teakle Building, Collaborative Room","duration":60,"dates":"3/3-7/4, 21/4-26/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"02","day":0,"time":{"hour":9,"minute":0},"campus":"STLUC","location":"32-208 - Gordon Greenwood Building, Collaborative Room","duration":60,"dates":"2/3-6/4, 20/4-25/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"03","day":1,"time":{"hour":12,"minute":0},"campus":"STLUC","location":"09-222 - Michie Building, Tutorial Room","duration":60,"dates":"3/3-7/4, 21/4-26/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"04","day":1,"time":{"hour":11,"minute":0},"campus":"STLUC","location":"78-224 - General Purpose South, Collaborative Room","duration":60,"dates":"3/3-7/4, 21/4-26/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"05","day":0,"time":{"hour":10,"minute":0},"campus":"STLUC","location":"78-224 - General Purpose South, Collaborative Room","duration":60,"dates":"2/3-6/4, 20/4-25/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"06","day":3,"time":{"hour":11,"minute":0},"campus":"STLUC","location":"78-224 - General Purpose South, Collaborative Room","duration":60,"dates":"5/3-9/4, 23/4-28/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"07","day":3,"time":{"hour":12,"minute":0},"campus":"STLUC","location":"78-224 - General Purpose South, Collaborative Room","duration":60,"dates":"5/3-9/4, 23/4-28/5","activityType":"TUT"},{"course":"MATH3401_S1_STLUC_IN","description":"Complex Analysis","activity":"TUT1","group":"08","day":3,"time":{"hour":13,"minute":0},"campus":"STLUC","location":"78-224 - General Purpose South, Collaborative Room","duration":60,"dates":"5/3-9/4, 23/4-28/5","activityType":"TUT"},{"course":"STAT3001_S1_STLUC_IN","description":"Mathematical Statistics","activity":"LEC1","group":"01","day":0,"time":{"hour":14,"minute":0},"campus":"STLUC","location":"05-213 - Richards Building, Lecture Theatre","duration":60,"dates":"24/2-6/4, 20/4-25/5","activityType":"LEC"},{"course":"STAT3001_S1_STLUC_IN","description":"Mathematical Statistics","activity":"LEC2","group":"01","day":2,"time":{"hour":13,"minute":0},"campus":"STLUC","location":"76-228 - Molecular Biosciences, Lecture Theatre","duration":60,"dates":"26/2-8/4, 22/4-27/5","activityType":"LEC"},{"course":"STAT3001_S1_STLUC_IN","description":"Mathematical Statistics","activity":"LEC3","group":"01","day":4,"time":{"hour":14,"minute":0},"campus":"STLUC","location":"81-313 - Otto Hirschfeld Building, Lecture Theatre","duration":60,"dates":"28/2-10/4, 24/4-29/5","activityType":"LEC"},{"course":"STAT3001_S1_STLUC_IN","description":"Mathematical Statistics","activity":"TUT1","group":"01","day":3,"time":{"hour":13,"minute":0},"campus":"STLUC","location":"09-201 - Michie Building, Tutorial Room","duration":60,"dates":"5/3-9/4, 23/4-28/5","activityType":"TUT"},{"course":"STAT3001_S1_STLUC_IN","description":"Mathematical Statistics","activity":"TUT1","group":"02","day":4,"time":{"hour":15,"minute":0},"campus":"STLUC","location":"35-215 - Chamberlain Building, Tutorial Room","duration":60,"dates":"6/3-10/4, 24/4-29/5","activityType":"TUT"},{"course":"STAT3001_S1_STLUC_IN","description":"Mathematical Statistics","activity":"TUT1","group":"03","day":3,"time":{"hour":8,"minute":0},"campus":"STLUC","location":"35-207 - Chamberlain Building, Tutorial Room","duration":60,"dates":"5/3-9/4, 23/4-28/5","activityType":"TUT"},{"course":"STAT3004_S1_STLUC_IN","description":"Probability Models & Stochastic Processes","activity":"LEC1","group":"01","day":1,"time":{"hour":11,"minute":0},"campus":"STLUC","location":"03-309 - Steele Building, Lecture Theatre","duration":60,"dates":"25/2-7/4, 21/4-26/5","activityType":"LEC"},{"course":"STAT3004_S1_STLUC_IN","description":"Probability Models & Stochastic Processes","activity":"LEC2","group":"01","day":3,"time":{"hour":9,"minute":0},"campus":"STLUC","location":"03-309 - Steele Building, Lecture Theatre","duration":60,"dates":"27/2-9/4, 23/4-28/5","activityType":"LEC"},{"course":"STAT3004_S1_STLUC_IN","description":"Probability Models & Stochastic Processes","activity":"LEC3","group":"01","day":4,"time":{"hour":11,"minute":0},"campus":"STLUC","location":"07-222 - Parnell Building, Lecture Theatre","duration":60,"dates":"28/2-10/4, 24/4-29/5","activityType":"LEC"},{"course":"STAT3004_S1_STLUC_IN","description":"Probability Models & Stochastic Processes","activity":"TUT1","group":"01","day":4,"time":{"hour":12,"minute":0},"campus":"STLUC","location":"09-803 - Michie Building, Tutorial Room","duration":60,"dates":"6/3-10/4, 24/4-29/5","activityType":"TUT"},{"course":"STAT3004_S1_STLUC_IN","description":"Probability Models & Stochastic Processes","activity":"TUT1","group":"02","day":4,"time":{"hour":13,"minute":0},"campus":"STLUC","location":"09-803 - Michie Building, Tutorial Room","duration":60,"dates":"6/3-10/4, 24/4-29/5","activityType":"TUT"},{"course":"STAT3004_S1_STLUC_IN","description":"Probability Models & Stochastic Processes","activity":"TUT1","group":"03","day":4,"time":{"hour":15,"minute":0},"campus":"STLUC","location":"09-803 - Michie Building, Tutorial Room","duration":60,"dates":"6/3-10/4, 24/4-29/5","activityType":"TUT"},{"course":"COMP4403_S1_STLUC_IN","description":"Compilers and Interpreters","activity":"LEC1","group":"01","day":0,"time":{"hour":8,"minute":0},"campus":"STLUC","location":"05-213 - Richards Building, Lecture Theatre","duration":120,"dates":"24/2-6/4, 20/4-25/5","activityType":"LEC"},{"course":"COMP4403_S1_STLUC_IN","description":"Compilers and Interpreters","activity":"LEC2","group":"01","day":1,"time":{"hour":11,"minute":0},"campus":"STLUC","location":"81-313 - Otto Hirschfeld Building, Lecture Theatre","duration":60,"dates":"25/2-7/4, 21/4-26/5","activityType":"LEC"},{"course":"COMP4403_S1_STLUC_IN","description":"Compilers and Interpreters","activity":"TUT1","group":"01","day":1,"time":{"hour":12,"minute":0},"campus":"STLUC","location":"49-316 - Advanced Engineering Building, Simulation & Modelling 1","duration":60,"dates":"25/2-7/4, 21/4-26/5","activityType":"TUT"},{"course":"COMP4403_S1_STLUC_IN","description":"Compilers and Interpreters","activity":"TUT1","group":"02","day":1,"time":{"hour":13,"minute":0},"campus":"STLUC","location":"49-316 - Advanced Engineering Building, Simulation & Modelling 1","duration":60,"dates":"25/2-7/4, 21/4-26/5","activityType":"TUT"}];

export const defaultState: TimetableState = {
    allSessions: testData,
}