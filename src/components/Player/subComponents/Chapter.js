import { useRef } from 'react';

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

  // Pause all chapters from here???


  return (
    <div id={`ch-${number}`} className="chapter">

      <p className="chapter-title">{`Chapter ${number}: ${title}`}</p>

      <audio
        id={`ch-${number}-audio`}
        className='player'
        ref={audioRef}
        preload="metadata"
      >
        <source src={audioSrc[0]} type="audio/webm" />
        <source src={audioSrc[1]} type="audio/mpeg" />
      </audio>

      <Play playing={playing} setPlaying={setPlaying} pauseOtherChapters={() => pauseOtherChapters(number)} />
      <Pause playing={playing} setPlaying={setPlaying} />

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
