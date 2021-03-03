import React, { useContext, useRef } from 'react';
import { ChapterContext } from '../../context/ChapterContext';

import utils from '../../utils';

const Play = (props) => {
  const { chapter, setChapter } = useContext(ChapterContext);
  const { pauseAllAudio } = utils;

  const updatePlayingState = (bool) => {
    setChapter(prevChapter => {
      const newChapter = prevChapter;
      newChapter.playing = bool;
      return newChapter;
    })
  }

  const handlePlay = (event) => {
    pauseAllAudio();
    const audio = utils.getAudio(event);
    if (audio && audio.paused) {
      audio.play();
    }
    updatePlayingState(true);
    // toggleVisible(playRef)
    // startUpdatingCurrentTime();
  }

  return (
    <button className="pBtn play" onClick={handlePlay}>play</button>
  )
}

export default Play;
