

const utils = {
  getAudio: (event) => {
    if (event) {
      return event.target.closest('.chapter').getElementsByClassName('player')[0];
    }
  },
  toggleVisible: (playRef) => {
    // console.log(playRef);
  },
  pauseAllAudio: () => {
    const audioObjects = document.getElementsByTagName('audio');
    // Refactor!
    for (let i = 0; i < audioObjects.length; i++) {
      audioObjects[i].pause();
    }
  }
}

export default utils
