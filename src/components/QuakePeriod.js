import './QuakePeriod.css'
import { Component } from 'react';

class QuakePeriod extends Component{
  constructor(props) {
    super(props);
    this.state = {period: 'Last Hour'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {    
    this.setState({period: event.target.value});  
    
  }

  render(){
    return (
      <div className="mag_filter">
        <select className="ui dropdown selection multiple" onChange={this.handleChange} name="Period">
            <option className="option" value="Last Hour">Last Hour</option>
            <option className="option" value="Last Day">Last Day</option>
            <option className="option" value="Last 7 Days">Last 7 Days</option>
            <option className="option" value="Last 30 Days">Last 30 Days</option>
        </select>
      </div>
    );    
  }

}

export default QuakePeriod;