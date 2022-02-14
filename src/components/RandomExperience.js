import React from 'react';
import Card from './Card';

export const RandomExperience = () => {
  const [enabled, setEnabled] = React.useState(true);

  const onRandomizePress = (e) => {
    setEnabled(!enabled);
    console.log(enabled);
  }

  return (
    <div className="random-experience-container" id="random-experience">
      <h1 style={enabled ? {display: "inline"} : {display: "none"}}>Take a look!</h1>
      <p>This is a random sample of my projects and experience.</p>

      <button className="random-button" onClick={onRandomizePress}>Randomize</button>
    </div>
  );
}

export default RandomExperience;