import { useState, useEffect, useRef } from "react";
import utils from '../../../utils';


function useProgressCircle(props) {
  // Receive useChapter functions from
  const { chapterNumber, curTime, duration, setCurTimeAudio } = props;
  const circumferenceRef = useRef(2 * Math.PI * 45);
  const timeElapsedRef = useRef();
  const [ mouseDown, setMouseDown ] = useState(false);

  useEffect(() => {
    // Set timeElapsedRef upon first render
    timeElapsedRef.current = utils.getTimeElapsedEl("circle", chapterNumber);

    // Update mouseDown state handler callbacks
    const setMouseDownTrue = (event) => {
      // event.preventDefault();
      setMouseDown(true);
    }
    const setMouseDownFalse = (event) => {
      // event.preventDefault();
      // Disable body scroll - improved UX
      utils.enableScroll('body');

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
  const updateCurTime = (points) => {
    const { startPoint, centerPoint, clickPoint } = points;
    const radian = utils.getAngleRadian(startPoint, centerPoint, clickPoint);
    const rawDegrees = radian * (180 / Math.PI)
    const degrees = utils.getDegrees(rawDegrees, clickPoint);
    const percentage = degrees / 360;
    const clickedTime = percentage * duration;
    setCurTimeAudio(clickedTime);
  }

  const evalPoints = (chapterNumber, event) => {
    // const chapterOffset = getChapterOffset(chapterNumber);
    const progressCircle = utils.getProgressCircle(chapterNumber);
    const boundingRect = progressCircle.getBoundingClientRect();
    const startPoint = {
      x: boundingRect.width / 2,
      y: 0
    };
    const centerPoint = {
      x: boundingRect.width / 2,
      y: boundingRect.height / 2
    };
    let clickPoint;

    if (event.type === 'click' || event.type === 'mousemove') {
      clickPoint = {
        x: event.pageX - boundingRect.left || event.nativeEvent.pageX  - boundingRect.left,
        y: event.pageY - boundingRect.top || event.nativeEvent.pageY  - boundingRect.top,
      }
    }
    if (event.type === 'touchmove') {
      clickPoint = {
        x: event.touches[0].pageX - boundingRect.left || event.targetTouches[0].pageX - boundingRect.left,
        y: event.touches[0].pageY - boundingRect.top || event.targetTouches[0].pageY - boundingRect.top
      }
    }
    return {
      startPoint,
      centerPoint,
      clickPoint
    }
  }

  // ProgressCircle event handlers
  const handleClick = (event) => {
    const points = evalPoints(chapterNumber, event)
    updateCurTime(points);
  }

  const handleMouseMove = (event) => {
    if (mouseDown === true) {
      // Disable body scroll - improved UX
      utils.disableScroll('body');

      const points = evalPoints(chapterNumber, event)
      updateCurTime(points);
    }
  }

  const handleTouchMove = (event) => {
    // Disable body scroll - improved UX
    utils.disableScroll('body');

    const points = evalPoints(chapterNumber, event)
    updateCurTime(points);
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
