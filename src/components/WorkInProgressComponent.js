import React from 'react';
import { Link } from 'react-router-dom';

class WorkInProgressComponent extends React.Component {
  render() {
    return (
      <div className="tempbody">
        <p className="tempbody-title">This website is a work in progress!</p>
        <p className="tempbody-subtitle">Check me out later when I'm finished :D</p>
        <p className="tempbody-subtitle">(or view the <Link to="/old">old site here</Link>)</p>
      </div>
    );
  }
}

export default WorkInProgressComponent;