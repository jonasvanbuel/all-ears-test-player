import { useState, useEffect, useContext, useRef } from 'react';
// import { PlayerContext } from '../../context/PlayerContext';

import utils from '../../utils';

const PButton = (props) => {
  const [ audio, setAudio ] = useState(null);

  useEffect(() => {
    setAudio(() => {

    })
  }, [])

  const handlePlay = (event) => {
    const audio = utils.getAudio(event);
    // TO DO: DISPATCH PAUSE FOR ALL OTHER AUDIO FILES - run from utils

    if (audio && audio.paused) {
      audio.play();
    }
    // setPlaying(true);
    // startUpdatingCurrentTime();
  }

  const handlePause = (event) => {
    const audio = utils.getAudioRef(event);
    if (audio.paused) {
      audio.pause();
    }
    // setPlaying(false);
    // stopUpdatingCurrentTime();
  }

  return (
    <div className="p-button">
      <button className="pBtn play" onClick={handlePlay}>play</button>
      <button className="pBtn pause hide" onClick={handlePause}>pause</button>
    </div>
  );
}

export default PButton;
