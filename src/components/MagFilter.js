import './MagFilter.css'
import { Component } from 'react';

class MagFilter extends Component{
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
      <div className="quake_period">
        <select className="ui dropdown selection multiple" onChange={this.handleChange} name="Period">
            <option className="option" value="All Magnitudes">All Magnitudes</option>
            <option className="option" value="Magnitude 1.0+">Magnitude 1.0+</option>
            <option className="option" value="Magnitude 2.5+">Magnitude 2.5+</option>
            <option className="option" value="Magnitude 4.5+">Magnitude 4.5+</option>
        </select>
      </div>
    );    
  }

}

export default MagFilter;