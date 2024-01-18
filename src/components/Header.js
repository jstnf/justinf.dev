import React from 'react';
// https://www.npmjs.com/package/react-typing-effect
// https://github.com/lamyfarai/react-typing-effect
import ReactTypingEffect from 'react-typing-effect';

import subtitles from "../assets/header/subtitles.json";
import headshot from "../assets/header/headshot.jpg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="fallin">
          <div className="header-image-container">
            <img src={headshot} alt=""></img>
          </div>
          <h1 className="header-name"><span id="en">Justin Figueroa</span><span id="jp">フィゲロア・ジャスティン</span></h1>
          <ReactTypingEffect
            text={subtitles.data}
            cursorRenderer={cursor => <p className="header-subname">{cursor}</p>}
            speed={75}
            eraseSpeed={50}
            typingDelay={1500}
            eraseDelay={4000}
            displayTextRenderer={(text, i) => {
              return (
                <p className="header-subname">
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