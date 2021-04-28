import { useState } from 'react';

import '../styles/socials.scss';

const Socials = () => {
  const [ bookmarked, setBookMarked ] = useState(false);

  return (
    <div className="socials">
      {bookmarked ?
        <i class="fas fa-bookmark" onClick={() => setBookMarked(false)}></i>
        :
        <i class="far fa-bookmark" onClick={() => setBookMarked(true)}></i>
      }
      <a href="https://www.instagram.com/tate/?hl=en" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
      <i class="fas fa-share"></i>
    </div>
  )
}

export default Socials;
