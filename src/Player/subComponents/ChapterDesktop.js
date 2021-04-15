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
      style={{backgroundImage: 'url(' + imgSources.desktop + ')'}}
    >
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
              <h3 className="chapter-title">{title}</h3>
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
            <h3 className="slash">/</h3>
            <h3 className="time-remaining">{utils.formatTime(Math.floor(duration) - curTime)}</h3>
          </div>
          <Socials />
        </div>

        <Prev />
        <Next />
      </div>
    </div>
  );
}

export default ChapterDesktop;
