import useChapter from '../hooks/useChapter';
import utils from '../utils';

import Audio from './Audio';
import ProgressBar from './ProgressBar';
import Play from './Play';
import Pause from './Pause';
import Rwnd from './Rwnd';
import Fwd from './Fwd';
import Next from './Next';
import Prev from './Prev';
import Socials from './Socials';

import '../styles/chapter-desktop.scss';

const ChapterDesktop = ({ chapter }) => {
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
      className="chapter-desktop"
    >
      <div className="background-image-container">
        <img
          src={imgSources.desktop}
          className="background-image"
          alt="chapter-background"
        />
        <div className="background-image-overlay"></div>
      </div>

      <div className="desktop-horizontal-container">
        <Audio
          chapterNumber={chapterNumber}
          audioSources={audioSources}
        />
        <div className="chapter-details-container">
          <div className="top-container">
            <div className="pp-container">
              <div className="pp-background-circle">
                {playing ?
                  <Pause playing={playing} onClick={handlePause} /> :
                  <Play playing={playing} onClick={handlePlay} />
                }
              </div>
            </div>
            <div className="chapter-details">
              <h3 className="chapter-header">{`Chapter ${chapterNumber}:`}</h3>
              <h5 className="chapter-title">{title}</h5>
            </div>
          </div>
          <ProgressBar
            chapterNumber={chapterNumber}
            curTime={curTime}
            duration={duration}
            setCurTimeAudio={setCurTimeAudio}
          />
          <div className="times noselect">
            <h3 className="current-time">{utils.formatTime(curTime)}</h3>
            <h5 className="slash">/</h5>
            <h5 className="time-remaining">{utils.formatTime(Math.floor(duration) - curTime)}</h5>
          </div>
          <Socials />
        </div>

    </div>

    <Prev />
    <Next />
  </div>
  );
}

export default ChapterDesktop;
