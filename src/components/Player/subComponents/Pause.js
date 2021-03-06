const Pause = (props) => {
  const { playing, setPlaying } = props;

  const handlePause = (event) => {
    setPlaying(false);
  }

  return (
    <button
      className={`pBtn pause ${playing ? "" : "hide"}`}
      onClick={handlePause}
    >
      PAUSE
    </button>
  )
}

export default Pause;
