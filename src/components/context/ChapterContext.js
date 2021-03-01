import React, { useState } from 'react';

export const ChapterContext = React.createContext();

export const ChapterProvider = (chapterProp) => {
  console.log(chapterProp);

  const [ chapter, setChapter ] = useState(chapterProp);

  // useEffect

  return (
    <ChapterContext.Provider value={{ chapter, setChapter }}>
      {chapterProp.children}
    </ChapterContext.Provider>
  )
}
