import React, { useState, useEffect } from 'react';
import {Howl, Howler} from 'howler';

import PpButton from './PpButton';


const Chapter = ({chapter}) => {
  const { count, title, audioSrc } = chapter;
  const [ playing, setPlaying ] = useState(false);

  let audio = null;
  let pButton = null;

  useEffect(() => {
    audio = document.getElementById(`ch-${count}`).getElementsByTagName('audio')[0];
    pButton = document.getElementById(`ch-${count}`).getElementsByClassName('pButton')[0];
  }, []);



  const playAudio = () => {
    if (audio.paused) {
      audio.play();
      pButton.className = "";
      pButton.className = "pButton pause";
    } else {
      audio.pause();
      pButton.className = "";
      pButton.className = "pButton play";
    }
  }

  return (
    <div id={`ch-${count}`} className="chapter">
      <p className="chapter-title">{`Chapter ${count}: ${title}`}</p>

      <audio>
        <source src={audioSrc[0]} type="audio/webm" />
        <source src={audioSrc[1]} type="audio/mpeg" />
      </audio>

      <button className="pButton play" onClick={playAudio}></button>

    </div>
  );
}

export default Chapter;
