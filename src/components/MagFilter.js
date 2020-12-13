import './MagFilter.css'
import { Component } from 'react';
import {changeMag} from '../actions';
import {useDispatch} from 'react-redux';

function MagFilter () {
  const dispatch = useDispatch();
  return (
    <div className="mag_filter">
      <select className="ui dropdown selection multiple" onChange={(event)=> dispatch(changeMag(event.target.value))} name="Period">
          <option className="option" value="ALL">All Magnitudes</option>
          <option className="option" value="1.0">Magnitude 1.0+</option>
          <option className="option" value="2.5">Magnitude 2.5+</option>
          <option className="option" value="4.5">Magnitude 4.5+</option>
      </select>
    </div>
  );    


}

export default MagFilter;