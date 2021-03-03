import React, { useContext, useRef } from 'react';
import { ChapterContext } from '../../context/ChapterContext';

import utils from '../../utils';

const Pause = (props) => {
  const { chapter, setChapter } = useContext(ChapterContext);

  const updatePlayingState = (bool) => {
    setChapter(prevChapter => {
      const newChapter = prevChapter;
      newChapter.playing = bool;
      return newChapter;
    })
  }

  const handlePause = (event) => {
    const audio = utils.getAudio(event);
    if (audio && !audio.paused) {
      audio.pause();
    }
    updatePlayingState(false);

    // stopUpdatingCurrentTime();
  }

  return (
    <button className="pBtn pause" onClick={handlePause}>pause</button>
  )
}

export default Pause;
