const utils = {
  getChapterEl: (chapterNumber) => {
    return document.getElementById(`ch-${chapterNumber}`);
  },
  getAudioEl: (chapterNumber) => {
    return document.getElementById(`ch-${chapterNumber}-audio`);
  }
}

export default utils
