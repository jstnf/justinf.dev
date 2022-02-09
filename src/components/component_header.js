import React from 'react';
// https://www.npmjs.com/package/react-typing-effect
// https://github.com/lamyfarai/react-typing-effect
import ReactTypingEffect from 'react-typing-effect';

import headshot from "../assets/headshot.jpg";

class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <div class="fallin">
          <div class="header-image-container">
            <img src={headshot}></img>
          </div>
          <h1 class="header-name">Justin Figueroa</h1>
          <ReactTypingEffect
            text={
              [
                "Computer Science @ UCR", 
                "Course Reader @ UCR",
                "a.k.a jstnf",
                "Developer @ Ataraxia",
                "Developer @ Omega Network"
              ]}
            cursorRenderer={cursor => <p class="header-subname">{cursor}</p>}
            speed={75}
            eraseSpeed={50}
            typingDelay={1500}
            eraseDelay={4000}
            displayTextRenderer={(text, i) => {
              return (
                <p class="header-subname">
                  {text.split('').map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                      >{char}</span>
                    );
                  })}
                </p>
              );
            }}        
          />
        </div>
      </div>
    )
  }
}

export default Header;