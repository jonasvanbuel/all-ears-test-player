import React, { useContext } from 'react';
import { ChapterContext } from '../../context/ChapterContext';

import utils from '../../utils';

const Fwd = (props) => {
  const { chapter, setChapter } = useContext(ChapterContext);


  const handleFwd = (event, secs) => {
    const audio = utils.getAudio(event);
    audio.currentTime += 10;
  }

  return (
    <button className="pBtn" onClick={handleFwd}>fwd</button>
  )
}

export default Fwd;
