import React, { Fragment, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { timeAction } from '../../../store/actions/actionTypes';

import "react-datepicker/dist/react-datepicker.css";

import { DateModalDiv } from './style';
import { FormGroup, Label2, Input2 } from '../../../style/Inputs'

const DateModal = () => {
    const dispatch = useDispatch();
    const [activeSub, setActiveSub] = useState('12');
    const [startDate, setStartDate] = useState(new Date());
    const InputStartDate = ({ value, onClick }) => (
        <Fragment>
            <FormGroup className="dates">
                <Label2>Start Date</Label2>
                <Input2 type="text" onClick={onClick} placeholder={value} />
            </FormGroup>
        </Fragment>
    );

    const [endDate, setEndDate] = useState(new Date());
    const InputEndDate = ({ value, onClick }) => (
        <Fragment>
            <FormGroup className="dates">
                <Label2>End Date</Label2>
                <Input2 type="text" onClick={onClick} placeholder={value} />
            </FormGroup>
        </Fragment>
    );


    useEffect(() => {
        dispatch(timeAction(startDate.toISOString().slice(0, 10), endDate.toISOString().slice(0, 10)), activeSub);
    }, [startDate, endDate, dispatch]);

    return (
        <Fragment>
            <DateModalDiv>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    customInput={<InputStartDate />}
                />
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    customInput={<InputEndDate />}
                />
            </DateModalDiv>
        </Fragment>
    )
}

export default DateModal;
