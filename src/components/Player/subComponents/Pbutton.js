import { useContext } from 'react';
// import { PlayerContext } from '../../context/PlayerContext';

const Pbutton = (props) => {
  const { playing, togglePlay } = props;

  const handleClick = (event) => {
    togglePlay();
  }

  return (
    <button
      className="pBtn"
      onClick={handleClick}
      data-playing={playing}
      data-chapter-id={1}
    >
      {playing ? "true" : "false"}
    </button>
  );
}

export default Pbutton;
