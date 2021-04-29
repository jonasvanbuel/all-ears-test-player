import useProgressBar from '../hooks/useProgressBar';

import '../styles/progress-bar.scss';

const ProgressBar = (props) => {
  const { chapterNumber } = props;
  const {
    handleClick,
    handleMouseMove,
    handleTouchMove,
  } = useProgressBar(props)


  return (
    <div
      id={`ch-${chapterNumber}-progress-bar`}
      className="progress-bar"
    >
      <div
        className="total-time"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      ></div>
      <div
        className="time-elapsed"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
      ></div>
    </div>
  )
}

export default ProgressBar;
