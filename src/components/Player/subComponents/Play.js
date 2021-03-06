// import utils from '../utils';

// import useChapter from '../hooks/useChapter';

const Play = (props) => {
  const { playing, setPlaying, pauseOtherChapters } = props;

  const handlePlay = () => {
    pauseOtherChapters();
    setInterval(setPlaying(true), 10);
  }

  return (
    <button
      className={`pBtn play ${playing ? "hide" : ""}`}
      onClick={handlePlay}
    >PLAY</button>
  )
}

export default Play;
