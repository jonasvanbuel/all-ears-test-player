import { useState, useEffect } from "react";
import { data } from '../data';

import utils from '../utils'

function usePlayer() {
  const [exhibition, setExhibition] = useState(data.exhibition);
  const [chapters, setChapters] = useState(data.chapters);

  // API call

  // Change mobile / desktop horizontal-container outside React. To review.
  useEffect(() => {
    const mobile = utils.mobileCheck();
    if (mobile) {
      utils.changeClassName('horizontal-container', 'mobile-horizontal-container');
    } else {
      utils.changeClassName('horizontal-container', 'desktop-horizontal-container');
    }
  }, [])

  return {
    exhibition,
    chapters
  }
}



export default usePlayer;
