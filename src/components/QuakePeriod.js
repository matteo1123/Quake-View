import './QuakePeriod.css'
import { Component } from 'react';
import {change} from '../actions';
import {useDispatch} from 'react-redux';

function QuakePeriod () {
    const dispatch = useDispatch();


 
    return (
      <div className="mag_filter">
        <select className="ui dropdown selection multiple" onChange={(event)=> dispatch(change(event.target.value))} name="Period">
            <option className="option" value="Last Hour">Last Hour</option>
            <option className="option" value="Last Day">Last Day</option>
            <option className="option" value="Last 7 Days">Last 7 Days</option>
            <option className="option" value="Last 30 Days">Last 30 Days</option>
        </select>
      </div>
    );    
}

export default QuakePeriod;