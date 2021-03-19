import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import usePlayer from './hooks/usePlayer';
import Chapter from './subComponents/Chapter';
import utils from './utils';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import './styles/Player.scss'

SwiperCore.use([Navigation, Pagination]);


const Player = () => {
  const { chapters } = usePlayer();

  // Breaking safari
  const handleSlideChange = (swiper) => {
    const prevAudio = utils.getAudioEl(swiper.previousIndex + 1)
    const curAudio = utils.getAudioEl(swiper.realIndex + 1)

    if (!prevAudio.paused) {
      prevAudio.pause();
      curAudio.play();
    }
  }

  return (
    <div id="player">
      <Swiper
        slidesPerView={1}
        navigation={{
          prevEl: '.prevBtn',
          nextEl: '.nextBtn'
        }}
        pagination
        onSlideChange={handleSlideChange}
        simulateTouch={false}
      >
        {
          chapters && chapters.length > 1 ? chapters.map((chapter) => (
            <SwiperSlide key={chapter.chapterNumber}>
              <Chapter key={chapter.chapterNumber} chapter={chapter} />
            </SwiperSlide>
          )) :
          <Chapter key={chapters[0].chapterNumber} chapter={chapters[0]}/>
        }
      </Swiper>
    </div>
  );
}

export default Player;
