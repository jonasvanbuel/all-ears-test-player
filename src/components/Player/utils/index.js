const utils = {
  getChapter: (chapterNumber) => {
    return document.getElementById(`ch-${chapterNumber}`);
  },
  getAudio: (chapterNumber) => {
    return document.getElementById(`ch-${chapterNumber}-audio`);
  }
}

export default utils
