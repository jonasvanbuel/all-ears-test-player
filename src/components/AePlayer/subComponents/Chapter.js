// import React from 'react';
import PpButton from './PpButton';

const Chapter = ({chapter}) => {
  const { count, title } = chapter;

  return (
    <div className="chapter">
      <p className="chapter-title">{`Chapter ${count}: ${title}`}</p>
      <PpButton playing={chapter.playing} />
    </div>
  );
}

export default Chapter;
