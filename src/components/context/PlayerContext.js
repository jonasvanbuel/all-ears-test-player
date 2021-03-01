import React, { useState } from 'react';

const data = {
  exhibition: {
    id: 1,
    mainTitle: 'Olafur Eliasson',
    subTitle: 'In Real Life',
    location: 'Tate Modern, London'
  },
  chapters: [
    {
      id: 1,
      count: 1,
      title: 'Your Uncertain Shadow (colour), 2010',
      playing: false,
      img: '',
      audioSrc: [
        'https://res.cloudinary.com/deo4sjfc8/video/upload/v1613466275/2021-all-ears-test-player/audio/05-Piano_tps3ou.webm',
        'https://res.cloudinary.com/deo4sjfc8/video/upload/v1613495616/2021-all-ears-test-player/audio/05-Piano_nqmair.mp3'
      ]
    },
    {
      id: 2,
      count: 2,
      title: 'Miles Davis - Flamenco Sketches',
      playing: false,
      img: '',
      audioSrc: [
        'https://res.cloudinary.com/deo4sjfc8/video/upload/v1614623913/2021-all-ears-test-player/audio/Miles_uitqur.webm',
        'https://res.cloudinary.com/deo4sjfc8/video/upload/v1614623816/2021-all-ears-test-player/audio/Miles_bgr9sx.mp3'
      ]
    }
  ]
}

export const PlayerContext = React.createContext();

export const PlayerProvider = (props) => {
  const [ player, setPlayer ] = useState(data);

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {props.children}
    </PlayerContext.Provider>
  )
}