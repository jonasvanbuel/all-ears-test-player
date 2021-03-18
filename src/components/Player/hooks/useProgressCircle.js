import { useState, useEffect, useRef } from "react";
import utils from '../utils';


function useProgressCircle(props) {
  // Receive useChapter functions from
  const { chapterNumber, curTime, duration, setCurTimeAudio } = props;
  const circumferenceRef = useRef(2 * Math.PI * 45);
  const timeElapsedRef = useRef();
  const [ mouseDown, setMouseDown ] = useState(false);

  useEffect(() => {
    // Set timeElapsedRef upon first render
    timeElapsedRef.current = utils.getTimeElapsedEl(chapterNumber);

    // Update mouseDown state handler callbacks
    const setMouseDownTrue = () => {
      setMouseDown(true);
    }
    const setMouseDownFalse = () => {
      setMouseDown(false)
    }
    document.body.addEventListener('mousedown', setMouseDownTrue)
    document.body.addEventListener('touchstart', setMouseDownTrue)
    document.body.addEventListener('mouseup', setMouseDownFalse)
    document.body.addEventListener('touchend', setMouseDownFalse)

    // Cleanup when dismount
    return () => {
      document.body.removeEventListener('mousedown', setMouseDownTrue)
      document.body.removeEventListener('touchstart', setMouseDownTrue)
      document.body.removeEventListener('mouseup', setMouseDownFalse)
      document.body.removeEventListener('touchend', setMouseDownFalse)
    }
  }, [])

  // Redraw progressCircle stroke when curTime or Duration changes
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

  // Calculate 360 degrees angle and setAudio to newTime
  const updateCurTime = (clickPoint) => {
    const centerPoint = { x: 100, y: 100 };
    const referencePoint = { x: 100, y: 0 };
    const radian = utils.getAngleRadian(referencePoint, centerPoint, clickPoint);
    const rawDegrees = radian * (180 / Math.PI)
    const degrees = utils.getDegrees(rawDegrees, clickPoint);
    const percentage = degrees / 360;
    const clickedTime = percentage * duration;
    setCurTimeAudio(clickedTime);
  }


  // TODO: Externalise any helpers to utils?
  const getChapterOffset = (chapterNumber) => {
    const chapterWidth = utils.getChapterEl(chapterNumber).getBoundingClientRect().width;
    return chapterWidth * (chapterNumber - 1);
  }

  const evalClickPoint = (chapterNumber, event) => {
    const chapterOffset = getChapterOffset(chapterNumber);
    if (event.type === 'click' || event.type === 'mousemove') {
      return {
        x: event.nativeEvent.layerX + chapterOffset,
        y: event.nativeEvent.layerY
      }
    }
    if (event.type === 'touchmove') {
      const boundingRect = event.target.getBoundingClientRect()
      console.log(boundingRect)
      return {
        x: event.targetTouches[0].clientX - boundingRect.x,
        y: event.targetTouches[0].clientY - boundingRect.y
      }
    }
  }

  // ProgressCircle event handlers
  const handleClick = (event) => {
    const clickPoint = evalClickPoint(chapterNumber, event)
    updateCurTime(clickPoint);
  }

  const handleMouseMove = (event) => {
    if (mouseDown === true) {
      const clickPoint = evalClickPoint(chapterNumber, event)
      updateCurTime(clickPoint);
    }
  }

  const handleTouchMove = (event) => {
    const clickPoint = evalClickPoint(chapterNumber, event)
    updateCurTime(clickPoint);
  }

  return {
    circumference: circumferenceRef.current,
    handleClick,
    handleMouseMove,
    handleTouchMove,
    mouseDown
  }
}


export default useProgressCircle;
