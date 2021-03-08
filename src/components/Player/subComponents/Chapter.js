import { useRef, useEffect } from 'react';

import useChapter from '../hooks/useChapter';

import Play from './Play';
import Pause from './Pause';
import Rwnd from './Rwnd';
import Fwd from './Fwd';


const Chapter = ({ chapter }) => {
  const { number, title, audioSrc } = chapter;
  const {
    playing,
    setPlaying,
    duration,
    curTime,
    updateCurTime,
    pauseOtherChapters
  } = useChapter(chapter);
  const audioRef = useRef();

  const handlePlay = () => {
    pauseOtherChapters();

    const promise = audioRef.current.play();
    if (promise !== undefined) {
      promise.then(() => {
        setPlaying(true);
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  const handlePause = () => {
    audioRef.current.pause();
  }

  return (
    <div id={`ch-${number}`} className="chapter">

      <p className="chapter-title">{`Chapter ${number}: ${title}`}</p>

      <audio
        id={`ch-${number}-audio`}
        className='player'
        ref={audioRef}
        autoPlay={false}
        preload="auto"
      >
        <source src={audioSrc[0]} type="audio/webm" />
        <source src={audioSrc[1]} type="audio/mpeg" />
      </audio>

      <Play
        playing={playing}
        onClick={handlePlay}
      />
      <Pause
        playing={playing}
        onClick={handlePause}
      />

      <div>
       <Rwnd updateCurTime={() => updateCurTime('rwnd')}/>
       <Fwd updateCurTime={() => updateCurTime('fwd')}/>
      </div>

      <p>playing: {playing === true ? "true" : "false"}</p>
      <p>duration: {duration}</p>
      <p>current time: {curTime}</p>
      <p>percentage: {(curTime / duration) * 100}%</p>

    </div>
  );
}

export default Chapter;
