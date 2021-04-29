import { useEffect } from 'react';

const Audio = ({ chapterNumber, audioSources }) => {

  useEffect(() => {
  }, []);

  return (
    <audio
      id={`ch-${chapterNumber}-audio`}
      autoPlay={false}
      preload="auto"
    >
    {
      audioSources.map((audioSource) => {
        return(
          <source src={audioSource.src} type={`audio/${audioSource.type}`} />
        )
      })
    }
    </audio>
  )
}

export default Audio;
