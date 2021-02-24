import React, { useState, useEffect } from 'react';

import {Howl, Howler} from 'howler';

function Player() {
  const [count, setCount] = useState(0);

  const sound = new Howl({
    src: ['https://res.cloudinary.com/deo4sjfc8/video/upload/v1613466275/2021-all-ears-test-player/audio/05-Piano_tps3ou.webm',
          'https://res.cloudinary.com/deo4sjfc8/video/upload/v1613495616/2021-all-ears-test-player/audio/05-Piano_nqmair.mp3'],
    html5: true,
    preload: true
  });

  const playAudio = () => {
    console.log('playAudio triggered...');
    sound.play();
  }

  const pauseAudio = () => {
    console.log('pauseAudio triggered...');
    sound.pause();
  }

  useEffect(() => {
  });

  return (
    <div id="player">
      <button id="pButton" className="play" onClick={playAudio}>play</button>
      <button onClick={pauseAudio}>pause</button>
    </div>
  )
}

export default Player;
