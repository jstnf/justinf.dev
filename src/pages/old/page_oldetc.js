import React from 'react';
import { Link } from 'react-router-dom';

class PageOldEtc extends React.Component {
  render() {
    return (
      <div class="legacy">
        <h1>etc</h1>
        <p>tabs or spaces?</p>
        <p class="info">spaces.</p>

        <p>test corner!</p>
        <p class="info">
          this is a space where i learn web dev...
          <br />
          <i>there is nothing here yet...</i>
        </p>

        <p><Link to='/old'>index</Link></p>
      </div>
    );
  }
}

export default PageOldEtc;