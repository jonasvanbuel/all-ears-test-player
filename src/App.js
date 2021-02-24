import './App.scss';

import Player from './components/Player';
import CountdownTimer from './components/Countdown-timer';
import CircularPlayerJquery from './components/Circular-player-jquery';


function App() {
  const tempCode = () => {
  }

  return (
    <div className="App">
      <div className="container">

        <div>
          <h1>HTML5 audio tag</h1>
          <audio
            controls
            src="https://res.cloudinary.com/deo4sjfc8/video/upload/v1613495616/2021-all-ears-test-player/audio/05-Piano_nqmair.mp3">
                Your browser does not support the
                <code>audio</code> element.
          </audio>
          <input type="range"></input>

          <h1>Basic Howler player</h1>
          <Player />

          <h1><a href="https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/">CSS tricks countdown timer</a></h1>
          <CountdownTimer />
        </div>

        <h1><a href="https://www.jqueryscript.net/other/Circular-Html5-Audio-Player-jQuery.html">Circular HTML5 audio player from example - using jQuery</a></h1>
        <CircularPlayerJquery />

      </div>
    </div>
  );
}

export default App;
