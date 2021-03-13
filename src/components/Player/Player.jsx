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

  return (
    <div id="player">
      <Swiper
        slidesPerView={1}
        navigation
        pagination
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        passiveListeners={false}
        preventClicks={false}
        preventClicksPropagation={false}
      >
        {
          chapters && chapters.length > 1 ? chapters.map((chapter) => (
            <SwiperSlide
              style={{width: "100%"}}
            >
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
