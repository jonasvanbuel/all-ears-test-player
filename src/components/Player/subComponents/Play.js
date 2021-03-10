const Play = (props) => {
  const { playing, onClick } = props;

  return (
    <button
      className={`pBtn play ${playing ? "hide" : ""}`}
      onClick={onClick}
    >
      PLAY
    </button>
  )
}

export default Play;
