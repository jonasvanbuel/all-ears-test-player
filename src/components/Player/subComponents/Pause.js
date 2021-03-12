const Pause = (props) => {
  const { playing, onClick } = props;

  return (
    <button
      className="pBtn pause"
      onClick={onClick}
    >
      PAUSE
    </button>
  )
}

export default Pause;
