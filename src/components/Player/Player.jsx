import React, { useContext } from 'react';
import './Player.scss';

import { PlayerContext } from './context/PlayerContext'
import { ChapterProvider } from './context/ChapterContext';

import Chapter from './subComponents/Chapter';

const Player = () => {
  const { player } = useContext(PlayerContext);
  const { chapters } = player;

  return (
    <div id="player">
      {chapters.map((chapter) => (
        <ChapterProvider key={chapter.count} chapterProp={chapter}>
          <Chapter key={chapter.count}/>
        </ChapterProvider>
      ))}
    </div>
  );
}

export default Player;
