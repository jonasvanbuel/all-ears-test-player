import './Player.scss';

import usePlayer from './hooks/usePlayer';
import Chapter from './subComponents/Chapter';

const Player = () => {
  const { chapters } = usePlayer();

  return (
    <div id="player">
      {chapters ? chapters.map((chapter) => (
        <Chapter key={chapter.number} chapter={chapter}/>
      )) :
      null}
    </div>
  );
}

export default Player;
