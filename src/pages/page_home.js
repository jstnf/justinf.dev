import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>hello, i'm justin!</h1>
        <h2>a.k.a. jstnf</h2>

        <p>who am i?</p>
        <p class="info">
        a student at the university of california, riverside (ucr), currently studying toward a b.s. in computer science
        </p>

        <p>what can i do?</p>
        <ul>
          <li>java</li>
          <li>c++</li>
          <li>python</li>
          <li>sql</li>
          <li>... and more soon!</li>
        </ul>

        <p>cool things i've done</p>
        <ul>
          <li><a href="https://tapple.world/" target="_blank" rel="noreferrer">Tapple</a> - Full-stack development for <i>Minecraft</i> game servers that host 100s of players weekly</li>
          <li><a href="https://devpost.com/software/uclassroom" target="_blank" rel="noreferrer">UClassRoom</a> - Web application to assist professors in the classroom, <i>Rose Hack 2020</i> Best Use of Google Cloud</li>
          <li><a href="https://github.com/jstnf/K-Match" target="_blank" rel="noreferrer">K-Match</a> - Console app in C++, using <a href="https://developer.spotify.com/documentation/web-api/" target="_blank" rel="noreferrer"><i>Spotify API</i></a> to find and recommend k-pop music</li>
          <li><a href="https://github.com/teamrocketuno/unoduelist" target="_blank" rel="noreferrer">UnoDuelist</a> - UNO game recreated in Spigot, <i>Cutie Hack 2019</i> 2nd place winner</li>
          <li><a href="https://github.com/jstnf/flappybirdj" target="_blank" rel="noreferrer">FlappyBirdJ</a> - Flappy Bird remade in Java</li>
        </ul>

        <p>check me out!</p>
        <ul>
          <li><a href="https://github.com/jstnf/" target="_blank" rel="noreferrer">github</a></li>
          <li><a href="https://www.linkedin.com/in/jstnf/" target="_blank" rel="noreferrer">linkedin</a></li>
        </ul>

        <p><Link to='/etc'>etc</Link></p>
      </div>
    );
  }
}

export default Home;