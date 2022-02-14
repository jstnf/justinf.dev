import React from 'react';
import data from "../assets/randomexperience.json";
import "../css/cards.css";

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

      <div className="cards">
        {postIndices.map((num) => {
          return (
            <div className="card">
              <h2>{data.posts[num].title}</h2>
              <p>{data.posts[num].content}</p>
            </div>
          );
        })}
      </div>

      <button className="random-button" onClick={randomizePostIndices}>Randomize</button>
    </div>
  );
}

export default RandomExperience;