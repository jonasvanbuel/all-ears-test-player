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
  }
}

export default utils
