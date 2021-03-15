import useChapter from '../hooks/useChapter';
import utils from '../utils';

import Play from './Play';
import Pause from './Pause';
import Rwnd from './Rwnd';
import Fwd from './Fwd';
import ProgressCircle from './ProgressCircle';


const Chapter = ({ chapter }) => {
  const { number, title, audioSrc } = chapter;
  const {
    playing,
    duration,
    curTime,
    setCurTimeAudio,
    handlePlay,
    handlePause,
    handleRwnd,
    handleFwd
  } = useChapter(chapter);


  return (
    <div id={`ch-${number}`} className="chapter">
      <p className="chapter-title">{`Chapter ${number}: ${title}`}</p>

      <audio
        id={`ch-${number}-audio`}
        className='player'
        autoPlay={false}
        preload="auto"
      >
        <source src={audioSrc[0]} type="audio/webm" />
        <source src={audioSrc[1]} type="audio/mpeg" />
      </audio>

      {playing ?
        <Pause playing={playing} onClick={handlePause} /> :
        <Play playing={playing} onClick={handlePlay} />
      }

      <div>
        <Rwnd onClick={handleRwnd} />
        <Fwd onClick={handleFwd} />
      </div>

      <div>
        <button className="prevBtn pBtn">prev</button>
        <button className="nextBtn pBtn">next</button>
      </div>

      <ProgressCircle
        number={number}
        curTime={curTime}
        duration={duration}
        setCurTimeAudio={setCurTimeAudio}
      />

      <p>current time: {utils.formatTime(curTime)}</p>
      <p>time remaining: {utils.formatTime(Math.floor(duration) - curTime)}</p>

    </div>
  );
}

export default Chapter;
