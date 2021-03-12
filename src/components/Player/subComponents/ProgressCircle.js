import { useRef } from 'react';
import useProgressCircle from '../hooks/useProgressCircle';
import './ProgressCircle.scss';

const ProgressCircle = (props) => {
  const { number } = props;
  const {
    circumference,
    handleClick,
    handleMouseMove,
    mouseDown
  } = useProgressCircle(props)

  const totalTimeRef = useRef();
  const timeElapsedRef = useRef();


  return (
    <div>
      <svg
        id={`ch-${number}-progress-circle`}
        className="progress-circle"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="circle-container">
          <circle
            ref={totalTimeRef}
            className="total-time"
            cx="50" cy="50" r="45"
            onClick={handleClick}
            onMouseMove={handleMouseMove}
          >
          </circle>
          <path
            ref={timeElapsedRef}
            className="time-elapsed hide"
            strokeDasharray={`${0} ${circumference}`}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          >
          </path>
        </g>
      </svg>
      <p>mouseDown: {mouseDown.toString()}</p>
    </div>
  )
}

export default ProgressCircle;
