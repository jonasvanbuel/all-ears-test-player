import React, { useState } from 'react';

import { data } from '../data';

export const PlayerContext = React.createContext();

export const PlayerProvider = (props) => {
  const [ player, setPlayer ] = useState(data);

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {props.children}
    </PlayerContext.Provider>
  )
}
