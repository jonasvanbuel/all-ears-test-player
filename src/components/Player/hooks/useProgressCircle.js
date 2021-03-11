import { useEffect, useRef } from "react";
import utils from '../utils';


function useProgressCircle(props) {
  const { number, curTime, duration, setCurTimeAudio } = props;
  const circumferenceRef = useRef(2 * Math.PI * 45);

  const timeElapsedRef = useRef();

  const updateCurTime = (event) => {
    const centerPoint = { x: 100, y: 100 };
    const referencePoint = { x: 100, y: 0 };
    const clickPoint = { x: event.nativeEvent.layerX, y: event.nativeEvent.layerY };
    const radian = utils.getAngleRadian(referencePoint, centerPoint, clickPoint);
    const rawDegrees = radian * (180 / Math.PI)
    const degrees = utils.getDegrees(rawDegrees, clickPoint);
    const percentage = degrees / 360;
    const clickedTime = percentage * duration;
    setCurTimeAudio(clickedTime);
  }

  const handleClick = (event) => {
    updateCurTime(event);
  }

  useEffect(() => {
    timeElapsedRef.current = utils.getTimeElapsedEl(number);
  }, [])

  useEffect(() => {
    const strokeDasharray = () => {
      const percentage = (curTime / duration);
      return `${percentage * circumferenceRef.current} ${circumferenceRef.current}`
    }
    if (curTime > 0) {
      utils.unhideEl(timeElapsedRef.current)
      timeElapsedRef.current.setAttribute("stroke-dasharray", strokeDasharray());
    }
  }, [curTime, duration])

  return {
    circumference: circumferenceRef.current,
    handleClick
  }
}


export default useProgressCircle;
