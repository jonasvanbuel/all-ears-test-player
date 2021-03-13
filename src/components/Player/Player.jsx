import { useEffect } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Player.scss';

import usePlayer from './hooks/usePlayer';
import Chapter from './subComponents/Chapter';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Player = () => {
  const { chapters } = usePlayer();

  useEffect(() => {

  }, [])

  return (
    <div id="player">
      <Swiper
        slidesPerView={1}
        navigation
        pagination
        passiveListeners={false}
        preventClicks={false}
        preventClicksPropagation={false}
        setWrapperSize
        simulateTouch={false}
        threshold={40}
        resistanceRatio={0.85} //0.85 default
      >
        {
          chapters && chapters.length > 1 ? chapters.map((chapter) => (
            <SwiperSlide key={chapter.number}>
              <Chapter key={chapter.number} chapter={chapter} />
            </SwiperSlide>
          )) :
          <Chapter key={chapters[0].number} chapter={chapters[0]}/>
        }
      </Swiper>
    </div>
  );
}

export default Player;
