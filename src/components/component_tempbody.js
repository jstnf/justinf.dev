import React from 'react';
import { Link } from 'react-router-dom';

class TempBodyComponent extends React.Component {
  render() {
    return (
      <div class="tempbody">
        <p class="tempbody-title">This website is a work in progress!</p>
        <p class="tempbody-subtitle">Check me out later when I'm finished :D</p>
        <p class="tempbody-subtitle">(or view the <Link to="/old">old site here</Link>)</p>
      </div>
    );
  }
}

export default TempBodyComponent;