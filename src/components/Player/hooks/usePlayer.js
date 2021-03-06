import { useState } from "react";
import { data } from '../data';

function usePlayer() {
  const [exhibition, setExhibition] = useState(data.exhibition);
  const [chapters, setChapters] = useState(data.chapters);

  return {
    exhibition,
    chapters
  }
}



export default usePlayer;
