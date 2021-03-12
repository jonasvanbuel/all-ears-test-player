const utils = {
  getChapterEl: (chapterNumber) => {
    return document.getElementById(`ch-${chapterNumber}`);
  },
  getAudioEl: (chapterNumber) => {
    return document.getElementById(`ch-${chapterNumber}-audio`);
  },
  hideEl: (element) => {
    if (!element.classList.contains("hide")) {
      element.classList.add("hide");
    }
  },
  unhideEl: (element) => {
    if (element.classList.contains("hide")) {
      element.classList.remove("hide");
    }
  },
  getTotalTimeEl: (chapterNumber) => {
    const progressCircle = document.getElementById(`ch-${chapterNumber}-progress-circle`);
    return progressCircle.querySelector('.total-time')
  },
  getTimeElapsedEl: (chapterNumber) => {
    const progressCircle = document.getElementById(`ch-${chapterNumber}-progress-circle`);
    return progressCircle.querySelector('.time-elapsed')
  },
  getAngleRadian: (p0, p1, p2) => {
    // centerPoint is p1; angle returned in Radians
    const b = Math.pow(p1.x-p0.x,2) + Math.pow(p1.y-p0.y,2);
    const a = Math.pow(p1.x-p2.x,2) + Math.pow(p1.y-p2.y,2);
    const c = Math.pow(p2.x-p0.x,2) + Math.pow(p2.y-p0.y,2);
    return Math.acos( (a+b-c) / Math.sqrt(4*a*b) );
  },
  getDegrees: (degrees, clickPoint) => {
    // range: 0 - 180 degrees
    if (clickPoint.x <= 100) {
      return 360 - degrees;
    } else {
      return degrees;
    }
  },
  formatTime: (seconds) => {
    if (seconds) {
      const date = new Date(null);
      date.setSeconds(seconds);
      return date.toISOString().substr(14, 5);
    } else {
      return "00:00"
    }
  }
}

export default utils
