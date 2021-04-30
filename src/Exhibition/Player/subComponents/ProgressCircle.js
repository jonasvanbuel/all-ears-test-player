import useProgressCircle from '../hooks/useProgressCircle';
import utils from '../../../utils';

import '../styles/progress-circle.scss';

const ProgressCircle = (props) => {
  const { chapterNumber } = props;
  const {
    circumference,
    handleClick,
    handleMouseMove,
    handleTouchMove,
  } = useProgressCircle(props)

  const tempArchive = () => {
    return (
      <div>
        <clipPath id="clip">
          <circle cx="50" cy="50" r="45"></circle>
        </clipPath>
        <filter id="blur" width="160%" height="160%" x="-30%" y="-30%">
          <feFlood flood-color="#fff" result="neutral"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blurred" />
          <feMerge>
            <feMergeNode in="neutral" />
            <feMergeNode in="blurred" />
          </feMerge>
        </filter>
        <g style={{clipPath: 'url(#clip)'}}>
          <use style={{filter: 'url(#blur)'}}></use>
        </g>
      </div>
    )
  }

  return (
    <svg
      id={`ch-${chapterNumber}-progress-circle`}
      className="progress-circle"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="linear-gradient-1">
          <stop offset="15%"  stop-color="#FFFFFF" stop-opacity="0.45" />
          <stop offset="85%" stop-color="#FFFFFF" stop-opacity="0.25"/>
        </linearGradient>
        <linearGradient id="linear-gradient-2">
          <stop offset="0%"  stop-color="#FFFFFF" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.4"/>
        </linearGradient>
        <radialGradient id="radial-gradient">
          <stop offset="40%" stop-color="#040E3B" stop-opacity="0.8" />
          <stop offset="70%" stop-color="#040E3B" stop-opacity="0.7" />
          <stop offset="100%" stop-color="#040E3B" stop-opacity="0.3" />
        </radialGradient>
      </defs>

      <g className="circle-container swiper-no-swiping">
        <circle
          className="button-background"
          cx="50" cy="50" r={utils.getProgressCircleRadius()}
          fill="url(#linear-gradient-1)"
        >
        </circle>
        <circle
          className="total-time"
          id="progress-circle-total-time"
          cx="50" cy="50" r="45"
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
        </circle>
        <path
          className="time-elapsed hide"
          strokeDasharray={`${0} ${circumference}`}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
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
