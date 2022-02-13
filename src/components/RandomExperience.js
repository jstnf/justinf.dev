import React from 'react';
import Card from './Card';

class RandomExperience extends React.Component {
  render() {
    return (
      <div className="random-experience-container" id="random-experience">
        <h1>Take a look!</h1>
        <p>This is a random sample of my projects and experience.</p>

        <p className="random-button" onClick={console.log("test")}>Randomize</p>
      </div>
    );
  }
}

export default RandomExperience;