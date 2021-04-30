import { useState, useEffect } from "react";

import utils from '../../../utils';

function usePlayer(exhibition) {

  const [details] = useState(exhibition.details);
  const [chapters] = useState(exhibition.chapters);

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
    details,
    chapters
  }
}



export default usePlayer;
