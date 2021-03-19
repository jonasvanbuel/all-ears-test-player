import useChapter from '../hooks/useChapter';
import utils from '../utils';

import Play from './Play';
import Pause from './Pause';
import Rwnd from './Rwnd';
import Fwd from './Fwd';
import ProgressCircle from './ProgressCircle';

import '../styles/Chapter.scss';

const Chapter = ({ chapter }) => {
  const { chapterNumber, title, audioSrc } = chapter;
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
    <div id={`ch-${chapterNumber}`} className="chapter">
      <div className="chapter-details">
        <div className="horizontal-container">
          <p className="chapter-title">{`Chapter ${chapterNumber}: ${title}`}</p>
        </div>
      </div>

      <audio
        id={`ch-${chapterNumber}-audio`}
        autoPlay={false}
        preload="auto"
      >
        <source src={audioSrc[0]} type="audio/webm" />
        <source src={audioSrc[1]} type="audio/mpeg" />
      </audio>

      <div className="controls">
        <ProgressCircle
          chapterNumber={chapterNumber}
          curTime={curTime}
          duration={duration}
          setCurTimeAudio={setCurTimeAudio}
        />
        {playing ?
          <Pause playing={playing} onClick={handlePause} /> :
          <Play playing={playing} onClick={handlePlay} />
        }
        <Rwnd onClick={handleRwnd} />
        <Fwd onClick={handleFwd} />
        <button className="prevBtn pBtn">prev</button>
        <button className="nextBtn pBtn">next</button>
      </div>

      <div className="timings noselect">
        <h3 className="current-time">{utils.formatTime(curTime)}</h3>
        <h3 className="time-remaining">{utils.formatTime(Math.floor(duration) - curTime)}</h3>
      </div>
    </div>
  );
}

export default Chapter;
