

const utils = {
  test: () => {
    console.log('utils.test triggered...');
  },
  getAudio: (e) => {
    return e.target.closest('.chapter').getElementsByClassName('player')[0];
  },
  handleRwnd: (e, secs) => {
    // if (audioRef.current.currentTime <= 10) {
    //   audioRef.current.currentTime = 0;
    // } else {
    //   audioRef.current.currentTime -= 10;
    // }
  },
  handleFwd: (e, secs) => {
    // audioRef.current.currentTime += 10;
  },
  pauseAllAudio: () => {

  }
}

export default utils
