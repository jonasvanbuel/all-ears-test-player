import { useEffect, useRef } from 'react';
import utils from '../utils';

import './ProgressCircle.scss';

const ProgressCircle = (props) => {
  const { number, curTime, duration, setCurTimeAudio } = props;

  // setCurTime needed

  const totalTimeRef = useRef();
  const timeElapsedRef = useRef();
  let circumference = useRef(2 * Math.PI * 45);

  useEffect(() => {
    console.log('useEffect triggered...');
    const totalTimeRefCopy = totalTimeRef.current;

    const centerPoint = { x: 100, y: 100 };
    const referencePoint = { x: 100, y: 0 };

    const degreesWithDirection = (degrees, clickPoint) => {
      // range: 0 - 180 degrees
      if (clickPoint.x <= 100) {
        return 360 - degrees;
      } else {
        return degrees;
      }
    }

    const onClick = (event) => {
      const clickPoint = { x: event.layerX, y: event.layerY };
      const radian = utils.getAngleRadian(referencePoint, centerPoint, clickPoint);
      const degrees = degreesWithDirection(radian * (180 / Math.PI), clickPoint);
      const percentage = degrees / 360;
      const clickedTime = percentage * duration;
      setCurTimeAudio(clickedTime);
    }

    totalTimeRefCopy.addEventListener("click", onClick)

    return () => (
      totalTimeRefCopy.removeEventListener("click", onClick)
    )
  }, [duration, setCurTimeAudio])


  useEffect(() => {
    const strokeDasharray = () => {
      const percentage = (curTime / duration);
      return `${percentage * circumference.current} ${circumference.current}`
    }

    if (curTime > 0) {
      utils.unhideEl(timeElapsedRef.current)
      timeElapsedRef.current.setAttribute("stroke-dasharray", strokeDasharray());
    }

  }, [curTime, duration])

  return (
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
          cx="50" cy="50" r="45">
        </circle>
        <path
          ref={timeElapsedRef}
          className="time-elapsed hide"
          strokeDasharray={`${0} ${circumference.current}`}
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
  )
}

export default ProgressCircle;
