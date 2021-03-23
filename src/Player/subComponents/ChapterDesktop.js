import useChapter from '../hooks/useChapter';
import utils from '../utils';

import Play from './Play';
import Pause from './Pause';
import Rwnd from './Rwnd';
import Fwd from './Fwd';
import Next from './Next';
import Prev from './Prev';

import '../styles/chapter-desktop.scss';

const ChapterDesktop = ({ chapter }) => {
  const { chapterNumber, title, audioSrc } = chapter;
  // const {
  //   playing,
  //   duration,
  //   curTime,
  //   setCurTimeAudio,
  //   handlePlay,
  //   handlePause,
  //   handleRwnd,
  //   handleFwd
  // } = useChapter(chapter);

  return (
    <div id={`ch-${chapterNumber}`} className="chapter-desktop">
      <div className="desktop-horizontal-container">
        chapter-desktop...
      </div>
    </div>
  );
}

export default ChapterDesktop;
