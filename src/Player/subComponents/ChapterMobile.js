import useChapter from '../hooks/useChapter';
import utils from '../utils';

import Audio from './Audio';
import Play from './Play';
import Pause from './Pause';
import Rwnd from './Rwnd';
import Fwd from './Fwd';
import Next from './Next';
import Prev from './Prev';
import ProgressCircle from './ProgressCircle';
import Socials from './Socials';

import '../styles/chapter-mobile.scss';

const ChapterMobile = ({ chapter }) => {
  const { chapterNumber, title, audioSources, imgSources } = chapter;
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
    <div
      id={`ch-${chapterNumber}`}
      className="chapter-mobile"
      style={{backgroundImage: 'url(' + imgSources.mobile + ')'}}
    >
      <div className="top">
        <div className="mobile-horizontal-container">
          <div className="chapter-details">
            <div className="mobile-horizontal-container">
              <h3 className="chapter-number">{`Chapter ${chapterNumber}:`}</h3>
              <h3 className="chapter-title">{title}</h3>
              <Socials />
            </div>
          </div>
        </div>
      </div>

      <div className="middle">
        <Audio chapterNumber={chapterNumber} audioSources={audioSources} />
        <div className="mobile-horizontal-container">
          <div className="controls">
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
            <Prev />
            <Next />
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="times no-select">
          <div className="current-time-container">
            <h1 className="current-time">{utils.formatTime(curTime)}</h1>
          </div>
          <h1 className="time-slash"> / </h1>
          <div className="time-remaining-container">
            <h1 className="time-remaining">{`-${utils.formatTime(Math.floor(duration) - curTime)}`}</h1>
          </div>
        </div>

        <Rwnd onClick={handleRwnd} />
        <Fwd onClick={handleFwd} />
      </div>

      <div className="background-image-overlay">
      </div>
    </div>
  );
}

export default ChapterMobile;
