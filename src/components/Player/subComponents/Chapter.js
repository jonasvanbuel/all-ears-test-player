import React, { useState, useEffect, useRef } from 'react';

import { ChapterContext } from '../context/ChapterContext';

import Controls from './subComponents/Controls';

const Chapter = () => {
  // useContext
  const { chapter } = React.useContext(ChapterContext);
  const { count, title, audioSrc } = chapter;


  // DOM refs
  const audioRef = useRef();

  const currentTimeRef = useRef();
  const timeRemainingRef = useRef();
  const timer = useRef(null);

  // Local Chapter state
  const [ playing, setPlaying ] = useState(false);
  const [ currentTimeState, setCurrentTimeState ] = useState(0);
  const [ totalDurationState, setTotalDurationState ] = useState();

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', updateTimes, false);
    audioRef.current.onloadedmetadata = () => {
      setTotalDurationState(audioRef.current.duration);
    }
  }, [chapter]);

  const updateTimes = () => {
    setCurrentTimeState(Math.round(audioRef.current.currentTime));
  }

  const startUpdatingCurrentTime = () => {
    timer.current = setTimeout(updateTimes, 100);
  }

  const stopUpdatingCurrentTime = () => {
    clearTimeout(timer.current);
  }

  return (
    <div id={`ch-${count}`} className="chapter">
      <p className="chapter-title">{`Chapter ${count}: ${title}`}</p>

      <audio preload="metadata" ref={audioRef} className='player' id={`ch-${count}-audio`}>
        <source src={audioSrc[0]} type="audio/webm" />
        <source src={audioSrc[1]} type="audio/mpeg" />
      </audio>

      <Controls setPlaying={setPlaying}/>

      <p>currentTimeState: {currentTimeState}</p>
      <p>totalDurationState: {totalDurationState}</p>
    </div>
  );
}

export default Chapter;
