import { useRef, useEffect } from 'react';

import useChapter from '../hooks/useChapter';

import Play from './Play';
import Pause from './Pause';
import Rwnd from './Rwnd';
import Fwd from './Fwd';


const Chapter = (props) => {
  const { number, title, audioSrc } = props.chapter;
  const {
    playing,
    setPlaying,
    duration,
    curTime,
    updateCurTime,
    pauseOtherChapters
  } = useChapter(number);
  const audioRef = useRef();
  const soundRef = useRef();

  useEffect(() => {
    soundRef.current = new Audio(audioSrc[0]);
  },[audioSrc]);

  const handleClick = () => {
    console.log('hanleClick triggered...');
    const promise = soundRef.current.play();
    if (promise !== undefined) {
      promise.then(() => {
        console.log('temp audio element playing from js');
      }).catch((error) => {
        console.log('temp audio element ERROR - cant play');
        console.log(error);
      })
    }
  }

  return (
    <div id={`ch-${number}`} className="chapter">

      <p className="chapter-title">{`Chapter ${number}: ${title}`}</p>

      <audio
        id={`ch-${number}-audio`}
        className='player'
        ref={audioRef}
        preload="none"
      >
        <source src={audioSrc[0]} type="audio/webm" />
        <source src={audioSrc[1]} type="audio/mpeg" />
      </audio>

      <Play
        playing={playing}
        setPlaying={setPlaying}
        pauseOtherChapters={() => pauseOtherChapters(number)}
      />
      <Pause playing={playing} setPlaying={setPlaying} />

      <div>
       <Rwnd updateCurTime={() => updateCurTime('rwnd')}/>
       <Fwd updateCurTime={() => updateCurTime('fwd')}/>
      </div>

      <button onClick={handleClick}>play js audio</button>

      <p>playing: {playing === true ? "true" : "false"}</p>
      <p>duration: {duration}</p>
      <p>current time: {curTime}</p>
      <p>percentage: {(curTime / duration) * 100}%</p>

    </div>
  );
}

export default Chapter;
