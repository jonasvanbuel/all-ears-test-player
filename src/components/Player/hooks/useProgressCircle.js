import { useState, useEffect, useRef } from "react";
import utils from '../utils';


function useProgressCircle(props) {
  const { number, curTime, duration, setCurTimeAudio } = props;
  const circumferenceRef = useRef(2 * Math.PI * 45);

  const totalTimeRef = useRef();
  const timeElapsedRef = useRef();
  const [ mouseDown, setMouseDown ] = useState(false);

  useEffect(() => {
    totalTimeRef.current = utils.getTotalTimeEl(number);
    timeElapsedRef.current = utils.getTimeElapsedEl(number);

    // Update mouseDown state
    const updateMouseDownTrue = () => {
      setMouseDown(true);
    }
    const updateMouseDownFalse = () => {
      setMouseDown(false)
    }
    document.body.addEventListener('mousedown', updateMouseDownTrue)
    document.body.addEventListener('mouseup', updateMouseDownFalse)
    return () => {
      document.body.removeEventListener('mousedown', updateMouseDownTrue)
      document.body.removeEventListener('mouseup', updateMouseDownFalse)
    }
  }, [])

  // Redraw stroke when curTime or Duration changes
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

  const updateCurTime = (event) => {
    const clickPoint = {
      x: event.layerX || event.nativeEvent.layerX,
      y: event.layerY || event.nativeEvent.layerY
    };
    const centerPoint = { x: 100, y: 100 };
    const referencePoint = { x: 100, y: 0 };
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

  const handleMouseMove = (event) => {
    if (mouseDown === true) {
      // console.log('handleMouseMove triggered...')
      updateCurTime(event);
    }
  }

  return {
    circumference: circumferenceRef.current,
    handleClick,
    handleMouseMove,
    mouseDown
  }
}


export default useProgressCircle;
