import React, { useState, useEffect, useRef } from 'react';
import { ChapterContext } from '../context/ChapterContext';



const Chapter = () => {
  // useContext
  const { chapter } = React.useContext(ChapterContext);
  const { count, title, audioSrc } = chapter;


  // DOM refs
  const audioRef = useRef();
  const playBtnRef = useRef();
  const pauseBtnRef = useRef();
  const rwndBtnRef = useRef();
  const fwdBtnRef = useRef();
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


  const handlePlay = () => {
    // TO DO: DISPATCH PAUSE FOR ALL OTHER AUDIO FILES


    if (audioRef.current.paused) {
      audioRef.current.play();
    }
    setPlaying(true);
    startUpdatingCurrentTime();
  }

  const handlePause = () => {
    if (!audioRef.current.paused) {
      audioRef.current.pause();
    }
    setPlaying(false);
    stopUpdatingCurrentTime();

  }

  const handleRwnd = (secs) => {
    if (audioRef.current.currentTime <= 10) {
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.currentTime -= 10;
    }
  }

  const handleFwd = (secs) => {
    audioRef.current.currentTime += 10;
  }

  const elementArchive = () => {
    return (
      <div>
        <p ref={currentTimeRef} id='current-time'></p>
        <p ref={timeRemainingRef} id='time-remaining'></p>
      </div>
    )
  }

  return (
    <div id={`ch-${count}`} className="chapter">
      <p className="chapter-title">{`Chapter ${count}: ${title}`}</p>

      <audio preload="metadata" ref={audioRef} className='vanilla-audio' id={`ch-${count}-audio`}>
        <source src={audioSrc[0]} type="audio/webm" />
        <source src={audioSrc[1]} type="audio/mpeg" />
      </audio>

      <button ref={playBtnRef} className="pBtn play" onClick={handlePlay}>play</button>
      <button ref={pauseBtnRef} className="pBtn pause" onClick={handlePause}>pause</button>

      <button ref={rwndBtnRef} className="pBtn" onClick={() => handleRwnd(10)}>rwnd</button>
      <button ref={fwdBtnRef} className="pBtn" onClick={() => handleFwd(10)}>fwd</button>

      <p>currentTimeState: {currentTimeState}</p>
      <p>totalDurationState: {totalDurationState}</p>
    </div>
  );
}

export default Chapter;
