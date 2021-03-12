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

      <ProgressCircle
        number={number}
        curTime={curTime}
        duration={duration}
        setCurTimeAudio={setCurTimeAudio}
      />

      <p>playing: {playing ? "true" : "false"}</p>
      <p>duration: {utils.formatTime(Math.floor(duration))}</p>
      <p>current time: {utils.formatTime(curTime)}</p>
      <p>time remaining: {utils.formatTime(Math.floor(duration) - curTime)}</p>
      <p>percentage: {(curTime / duration) * 100}%</p>

    </div>
  );
}

export default Chapter;
