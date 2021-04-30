import { useState, useEffect, useRef } from "react";
import utils from '../../../utils';


function useProgressBar(props) {

  const { chapterNumber, curTime, duration, setCurTimeAudio } = props;
  const totalTimeRef = useRef();
  const timeElapsedRef = useRef();
  const [ mouseDown, setMouseDown ] = useState(false);

  useEffect(() => {
    // Set totalTimeRef and timeElapsedRef upon first render
    totalTimeRef.current = utils.getTotalTimeEl("bar", chapterNumber);
    timeElapsedRef.current = utils.getTimeElapsedEl("bar", chapterNumber);

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
  }, []);

  // Update width .time-elapsed when curTime or Duration changes
  useEffect(() => {
    timeElapsedRef.current.style.width = `${(curTime / duration) * 100}%`;
  }, [curTime, duration])

  const updateCurTime = (points) => {
    const { startPoint, clickPoint, endPoint } = points;

    const getPercentage = (points) => {
      const totalWidth = endPoint - startPoint;
      const clickedPosition = clickPoint - startPoint;
      return clickedPosition / totalWidth;
    }
    const clickedTime = getPercentage() * duration;
    setCurTimeAudio(clickedTime);
  }

  const evalPoints = (event) => {
    const boundingRect = totalTimeRef.current.getBoundingClientRect();

    // Filter on type of event...




    return {
      startPoint: boundingRect.left,
      clickPoint: event.pageX || event.nativeEvent.pageX,
      endPoint: boundingRect.right
    }
  }

  // ProgressBar event handlers
  const handleClick = (event) => {
    const points = evalPoints(event)
    updateCurTime(points);
  }

  const handleMouseMove = (event) => {
    if (mouseDown === true) {
      const points = evalPoints(event)
      updateCurTime(points);
    }
  }

  const handleTouchMove = (event) => {
    const points = evalPoints(event)
    updateCurTime(points);
  }

  return {
    handleClick,
    handleMouseMove,
    handleTouchMove,
    mouseDown
  }
}


export default useProgressBar;
