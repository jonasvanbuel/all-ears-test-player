const Pause = (props) => {
  const { playing, onClick } = props;

  return (
    <button
      className={`pBtn pause ${playing ? "" : "hide"}`}
      onClick={onClick}
    >
      PAUSE
    </button>
  )
}

export default Pause;
