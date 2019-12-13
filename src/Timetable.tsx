import React from 'react';
import _ from 'lodash';
import { CourseSession, DAY_NAMES } from './logic/types';
import { computeDayTimeArrays, makeSessionKey, getCourseCode } from './logic/functions';

import {css} from 'emotion';

export type Props = {
    selectedSessions: CourseSession[],
}

const START_HOUR = 8;
const END_HOUR = 18;

const sessionStyle = css({
    flexGrow: 1,
    flexBasis: 0,
    wordBreak: 'break-all',

    // paddingTop: '0.5em',
    //lineHeight: 1,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    flexWrap: 'wrap',


    marginLeft: '2px',
    marginRight: '2px' ,

    borderRadius: '0px',
    borderLeft: '1px solid #dbdbdb',
    borderRight: '1px solid #dbdbdb',
    
    backgroundColor: 'hsl(0, 0%, 96%)',

    color: 'black',
});

type TimetableSessionProps = {
    session: CourseSession
}

const TimetableSession = ({session}: TimetableSessionProps) => {
    const activityCSS: {[type: string]: string} = {
        'LEC': 'is-info',
        'TUT': 'is-success',
        'PRA': 'is-warning',
    };

    return <a key={makeSessionKey(session)} className={" " + sessionStyle}>
        <span className="is-family-monospace has-text-weight-bold">{getCourseCode(session.course)}</span>
        <div className="tags has-addons has-text-weight-semibold	">
            <span className={"tag " + (activityCSS[session.activityType]) ?? "" }>{session.activity}</span>
            <span className="tag is-dark ">{session.group}</span>
        </div>
    </a>;
}

const timeStyle = css({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
})

const makeTimeElements = (desktop: boolean) => [
    <div key="ht" className={"th thead has-text-right " + (!desktop?"is-hidden-tablet":"is-hidden-mobile")}></div>,
    ..._.range(START_HOUR, END_HOUR+1).map(h =>
        <div key={"t"+h} className={"th has-text-right is-size-5 " + timeStyle + ' ' + (!desktop?"is-hidden-tablet":"is-hidden-mobile")}>{h}</div>)
];

const hourStyle = css({
    paddingTop: 0,
    paddingBottom: 0,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginLeft: '-2px',
    marginRight: '-2px',

    height: '3.9rem',
});

type DayColumnProps = {
    day: number,
    daySessions: CourseSession[][]
}

const DayColumn = ({day, daySessions}: DayColumnProps) => {
    const [timeHeader, ...timeColumn] = makeTimeElements(false);
    return <>
        {timeHeader}
        <div className="th thead has-text-centered is-size-5 ">{DAY_NAMES[day]}</div>
        {_.range(START_HOUR, END_HOUR+1).map((h, i) =>
            <React.Fragment key={h}>
                {timeColumn[i]}
                <div className={"td has-text-centered " + hourStyle}>
                    {daySessions[h].map(s => <TimetableSession session={s}></TimetableSession>)}
                </div>
            </React.Fragment>)}
    </>;
};

const Timetable: React.FC<Props> = ({selectedSessions}) => {

    const byDayTime = computeDayTimeArrays(selectedSessions);    

    return <div className="table timetable">
        {makeTimeElements(true)}
        {_.range(5).map(i => <React.Fragment key={i}>
            <DayColumn day={i} daySessions={byDayTime[i]}></DayColumn>
            <div className="rtable-spacer"></div>
        </React.Fragment>)}
    </div>;
};

export default Timetable;