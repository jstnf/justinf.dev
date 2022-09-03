import React from 'react';
import data from "../assets/randomexperience.json";

export const RandomExperience = () => {
  const [postIndices, setPostIndices] = React.useState([0, 1, 2, 3, 4]);

  const randomizePostIndices = (e) => {
    let newPostIndices = [];
    for (let i = 0; i < 5; i++) {
      let trial = Math.floor(Math.random() * data.posts.length);
      while (newPostIndices.includes(trial)) {
        trial = Math.floor(Math.random() * data.posts.length);
      }
      newPostIndices.push(trial);
    }
    setPostIndices(newPostIndices);
  }

  return (
    <div className="random-experience-container" id="random-experience">
      <h1 className="random-experience-title">Take a look!</h1>
      <p className="random-experience-subtitle">This is a random sample of my projects and experience.</p>

      <p>temp</p>

      <button className="random-button" onClick={randomizePostIndices}>Show Me More...</button>
    </div>
  );
}

export default RandomExperience;