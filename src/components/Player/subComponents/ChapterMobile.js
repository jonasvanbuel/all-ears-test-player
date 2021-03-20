import useChapter from '../hooks/useChapter';
import utils from '../utils';

import Play from './Play';
import Pause from './Pause';
import Rwnd from './Rwnd';
import Fwd from './Fwd';
import Next from './Next';
import Prev from './Prev';
import ProgressCircle from './ProgressCircle';

import '../styles/ChapterMobile.scss';

const ChapterMobile = ({ chapter }) => {
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
    <div id={`ch-${chapterNumber}`} className="chapter-mobile">
      <div className="top">
        <div className="horizontal-container">
          <div className="chapter-details">
            <p className="chapter-title">{`Chapter ${chapterNumber}: ${title}`}</p>
          </div>
        </div>
      </div>
      <div className="middle">
        <audio
          id={`ch-${chapterNumber}-audio`}
          autoPlay={false}
          preload="auto"
        >
          <source src={audioSrc[0]} type="audio/webm" />
          <source src={audioSrc[1]} type="audio/mpeg" />
        </audio>

        <div className="horizontal-container">
          <div className="controls">
            <Prev />
            <div className="progress-circle-container">
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
            </div>
            <Next />
          </div>

        </div>
      </div>
      <div className="bottom">
        <div className="timings noselect">
          <h3 className="current-time">{utils.formatTime(curTime)}</h3>
          <h3 className="time-remaining">{utils.formatTime(Math.floor(duration) - curTime)}</h3>
        </div>
        <Rwnd onClick={handleRwnd} />
        <Fwd onClick={handleFwd} />
      </div>
    </div>
  );
}

export default ChapterMobile;
