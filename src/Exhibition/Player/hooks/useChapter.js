import { useState, useEffect, useRef } from "react";
import utils from '../../../utils';

function useChapter(chapter) {
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [curTime, setCurTime] = useState(0);

  let audioRef = useRef();

  useEffect(() => {
    audioRef.current = utils.getAudioEl(chapter.chapterNumber);
    const audio = audioRef.current;

    const setPlayingTrue = () => {
      setPlaying(true);
    }

    const setPlayingFalse = () => {
      setPlaying(false);
    }

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    }

    const setAudioTime = () => {
      setCurTime(audio.currentTime);
    }

    // DOM listeners: update React state on DOM events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('playing', setPlayingTrue);
    audio.addEventListener('pause', setPlayingFalse);


    // Effect cleanup - remove event listeners
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('playing', setPlayingTrue);
      audio.removeEventListener('pause', setPlayingFalse);
    }
  }, []);

  const updateCurTime = (direction) => {
    const audio = audioRef.current;

    switch (direction) {
      case 'rwnd':
        if (audio.currentTime >= 10) {
          audio.currentTime -= 10;
        }
        if (audio.currentTime < 10) {
          audio.currentTime = 0;
        }
        break;
      case 'fwd':
        if ((audio.currentTime + 10) >= audio.duration) {
          audio.currentTime = audio.duration;
          audio.pause();
        }
        if ((audio.currentTime + 10) < audio.duration) {
          audio.currentTime += 10
        };
        break;
      default:
        console.log('useChapter.updateCurTime default switch triggered...');
    }
  }

  const setCurTimeAudio = (newTime) => {
    const audio = audioRef.current;
    audio.currentTime = newTime;
  }

  const pauseOtherChapters = (chapterNumber) => {
    const audio = utils.getAudioEl(chapterNumber);
    const audioObjects = document.getElementsByTagName('audio');

    // ONLY PAUSE THE OTHER ONES!?
    // chapterNumber is the one being triggered...
    for (let i = 0; i < audioObjects.length; i++) {
      if (audioObjects[i] !== audio && !audioObjects[i].paused) {
        audioObjects[i].pause();
      }
    }
  }

  const handlePlay = () => {
    pauseOtherChapters();

    const promise = audioRef.current.play();
    if (promise !== undefined) {
      promise.then(() => {
        setPlaying(true);
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  const handlePause = () => {
    audioRef.current.pause();
  }

  const handleRwnd = () => {
    updateCurTime('rwnd');
  }

  const handleFwd = () => {
    updateCurTime('fwd');
  }

  return {
    playing,
    setPlaying,
    duration,
    setDuration,
    curTime,
    setCurTime,
    setCurTimeAudio,
    updateCurTime,
    pauseOtherChapters,
    handlePlay,
    handlePause,
    handleRwnd,
    handleFwd
  }
}

export default useChapter;
