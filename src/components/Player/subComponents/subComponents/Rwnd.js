import React, { useContext } from 'react';
import { ChapterContext } from '../../context/ChapterContext';

import utils from '../../utils';

const Rwnd = (props) => {
  const { chapter, setChapter } = useContext(ChapterContext);

  const handleRwnd = (event, secs) => {
    const audio = utils.getAudio(event);
    if (audio.currentTime <= 10) {
      audio.currentTime = 0;
    } else {
      audio.currentTime -= 10;
    }
  }

  return (
    <button className="pBtn" onClick={handleRwnd}>rwnd</button>
  )
}

export default Rwnd;
