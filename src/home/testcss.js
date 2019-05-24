import React, {Component} from 'react';
import './button.css';

class Application extends Component {
    render() {
      return (
        <div>
          <button className="small">Button small</button>
          <button className="large">Button LARGE</button>
        </div>
      )
    }
  }
  
  export default Application;