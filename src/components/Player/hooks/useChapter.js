import { useState, useEffect, useRef } from "react";
import utils from '../utils';

function useChapter(chapter) {
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [curTime, setCurTime] = useState(0);

  let audioRef = useRef();

  useEffect(() => {
    audioRef.current = utils.getAudio(chapter.number);
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
  });

  // useEffect(() => {
  //   const audio = utils.getAudio(chapterNumber);
  //   // Persist state change to audio element
  //   // playing ? audio.play() : audio.pause()

  //   // Asynchronous attempt
  //   if (playing === true) {
  //     const promise = audio.play();
  //     if(promise !== undefined) {
  //       promise.then(() => {
  //         console.log('audio confirmed playing...')
  //         document.getElementById('debug').innerText = 'audio confirmed playing...';
  //       }).catch(error => console.error);
  //     }
  //   } else {
  //     audio.pause();
  //     console.log('audio paused...');
  //     document.getElementById('debug').innerText = 'audio paused...';
  //   }

  // }, [playing])

  const updateCurTime = (direction) => {
    // const audio = utils.getAudio(chapterNumber);
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

  const pauseOtherChapters = (chapterNumber) => {
    const audio = utils.getAudio(chapterNumber);
    const audioObjects = document.getElementsByTagName('audio');

    // ONLY PAUSE THE OTHER ONES!?
    // chapterNumber is the one being triggered...

    for (let i = 0; i < audioObjects.length; i++) {
      if (audioObjects[i] !== audio && !audioObjects[i].paused) {
        audioObjects[i].pause();
      }
    }
  }

  return {
    playing,
    setPlaying,
    duration,
    setDuration,
    curTime,
    setCurTime,
    updateCurTime,
    pauseOtherChapters
  }
}

export default useChapter;
