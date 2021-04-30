const utils = {
  mobileCheck: () => {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    // TODO: call other utils.function to unhide desktop or mobile footer (different contect)!

    return check;
  },
  changeClassName: (oldClass, newClass) => {
    const els = document.getElementsByClassName(oldClass);
    console.log(els.length);

    for (let i = 0; i < els.length; i++) {
      els[i].classList.add(newClass);
      console.log('loop triggered...')
    }
    for (let i = 0; i < els.length; i++) {
      els[i].classList.remove(oldClass);
    }
  },
  getChapterEl: (chapterNumber) => {
    return document.getElementById(`ch-${chapterNumber}`);
  },
  getAudioEl: (chapterNumber) => {
    return document.getElementById(`ch-${chapterNumber}-audio`);
  },
  getProgressCircle: (chapterNumber) => {
    return document.getElementById(`ch-${chapterNumber}-progress-circle`)
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
  getTotalTimeEl: (playerType, chapterNumber) => {
    const progressCircle = document.getElementById(`ch-${chapterNumber}-progress-${playerType}`);
    return progressCircle.querySelector('.total-time')
  },
  getTimeElapsedEl: (playerType, chapterNumber) => {
    const progressCircle = document.getElementById(`ch-${chapterNumber}-progress-${playerType}`);
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
  getProgressCircleRadius: () => {
    const totalTime = document.getElementById('progress-circle-total-time');
    if (totalTime) {
      const style = getComputedStyle(totalTime);
      const strokeWidth = parseInt(style.strokeWidth.replace('px', ''));
      const radius = 45 + (strokeWidth / 2);
      return radius
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
  },
  getAllIndexes: (arr, val) => {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) !== -1){
        indexes.push(i);
    }
    return indexes;
  },
  formatAccessCode: (userInput) => {
    const inputArray = userInput.split("");
    // Capitalize
    const dashIndexes = utils.getAllIndexes(inputArray, "-");
    dashIndexes.forEach(i => {
      const charI = i + 1;
      inputArray[charI] = inputArray[charI].toUpperCase();
    })
    // Delete dashes
    const string = inputArray.join("");
    const accessCode = string.replace(/-/g, "")
    return accessCode;
  },
  disableScroll: (tagName) => {
    const body = document.getElementsByTagName(tagName)[0];
    if (!body.classList.contains('noscroll')) {
      body.classList.add('noscroll');
    }
  },
  enableScroll: (tagName) => {
    const body = document.getElementsByTagName(tagName)[0];
    if (body.classList.contains('noscroll')) {
      body.classList.remove('noscroll');
    }
  }
}

export default utils
