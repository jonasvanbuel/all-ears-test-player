import { useRef } from 'react';

const handlePlay = () => {
  console.log('handlePlay triggered...');
  console.log(audioRef)

  if (audioRef.current.paused) {
    audioRef.current.play();
  }
  setPlaying(true);
  startUpdatingCurrentTime();
}

const handlePause = () => {
  console.log('handlePause triggered...');

  if (!audioRef.current.paused) {
    audioRef.current.pause();
  }
  setPlaying(false);
  // stopUpdatingCurrentTime();
}

const handleRwnd = (secs) => {
  if (audioRef.current.currentTime <= 10) {
    audioRef.current.currentTime = 0;
  } else {
    audioRef.current.currentTime -= 10;
  }
}

const handleFwd = (secs) => {
  console.log('handleFwd triggered...');
  audioRef.current.currentTime += 10;
}
