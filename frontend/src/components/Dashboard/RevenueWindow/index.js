import React, { Fragment } from 'react';

import { TitleDiv } from './style';
import getDate from '../../../helper/date_helper';

const RevenueDashboard = ( { props } ) => {
    
    return (
        <Fragment>
            <TitleDiv>
                <div className="leftColumn">
                    <h3>This Year</h3>
                    <h3>Last Month</h3>
                    <h3>This Month</h3>	
                </div>
                <div className="rightColumn">
                    <h3>{props.revenues.filter(rev => {return rev.date >= getDate('12')}).reduce((sum, current) => { return sum + current.revenue}, 0)}</h3>
                    <h3>{props.revenues.filter(rev => {return rev.date >= getDate('2')}).reduce((sum, current) => { return sum + current.revenue}, 0)}</h3>
                    <h3>{props.revenues.filter(rev => {return rev.date >= getDate('1')}).reduce((sum, current) => { return sum + current.revenue}, 0)}</h3>
                </div>
            </TitleDiv>
        </Fragment>
    )
};

export default RevenueDashboard;