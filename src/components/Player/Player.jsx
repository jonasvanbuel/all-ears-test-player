import { useEffect } from 'react';
import './Player.scss';

import usePlayer from './hooks/usePlayer';
import Chapter from './subComponents/Chapter';

const Player = () => {
  const { chapters } = usePlayer();

  useEffect(() => {
    function unlockAudio() {
      const sound = new Audio('https://res.cloudinary.com/deo4sjfc8/video/upload/v1615230452/2021-all-ears-test-player/audio/unlock_audio_ulkvqp.mp3');
      const promise = sound.play();

      if (promise !== undefined) {
        promise.then(() => {
          console.log('unlockAudio sound playing...')
          // sound.pause();
          // sound.currentTime = 0;
        }).catch(error => {
          console.log(error);
        })
      }

      document.body.removeEventListener('click', unlockAudio)
      document.body.removeEventListener('touchstart', unlockAudio)
    }

    document.body.addEventListener('click', unlockAudio);
    document.body.addEventListener('touchstart', unlockAudio);
  }, [])

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
