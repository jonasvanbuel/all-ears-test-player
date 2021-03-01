import React, { useState } from 'react';

export const ChapterContext = React.createContext();

export const ChapterProvider = ({ children, chapterProp}) => {
  const [ chapter, setChapter ] = useState(chapterProp);

  // useEffect!?

  return (
    <ChapterContext.Provider value={{ chapter, setChapter }}>
      {children}
    </ChapterContext.Provider>
  )
}
