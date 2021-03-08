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
  const soundRef = useRef();

  useEffect(() => {
    soundRef.current = new Audio(audioSrc[1]);
  },[audioSrc]);

  const handlePlay = () => {
    // console.log('hanleClick triggered...');
    const promise = audioRef.current.play();
    if (promise !== undefined) {
      promise.then(() => {
        // console.log('temp audio element playing from js');
        setPlaying(true);
        document.getElementById('debug').innerText = 'temp audio element playing from js';
      }).catch((error) => {
        // console.log('temp audio element ERROR - cant play');
        console.log(error);
        document.getElementById('debug').innerText = 'temp audio element ERROR - cant play';
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
        preload="none"
      >
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

      <button onClick={handlePlay}>play js audio</button>
      <button onClick={handlePause}>pause js audio</button>
      <p id='debug'></p>


      <p>playing: {playing === true ? "true" : "false"}</p>
      <p>duration: {duration}</p>
      <p>current time: {curTime}</p>
      <p>percentage: {(curTime / duration) * 100}%</p>

    </div>
  );
}

export default Chapter;
