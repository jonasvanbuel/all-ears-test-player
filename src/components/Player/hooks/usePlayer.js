import { useState, useEffect } from "react";
import { data } from '../data';
import useChapter from './useChapter';

function usePlayer() {
  const [exhibition, setExhibition] = useState(data.exhibition);
  const [chapters, setChapters] = useState(data.chapters);

  return {
    exhibition,
    chapters
  }
}



export default usePlayer;
