import './QuakePeriod.css'
import {changePeriod} from '../actions';
import {useDispatch} from 'react-redux';

function QuakePeriod () {
    const dispatch = useDispatch();
 
    return (
      <div className="quake_period">
        <select className="ui dropdown selection multiple" onChange={(event)=> dispatch(changePeriod(event.target.value))} name="Period">
            <option className="option" value="HOUR">Last Hour (time of report)</option>
            <option className="option" value="DAY">Last Day</option>
            <option className="option" value="7">Last 7 Days</option>
            <option className="option" value="30">Last 30 Days</option>
        </select>
      </div>
    );    
}

export default QuakePeriod;