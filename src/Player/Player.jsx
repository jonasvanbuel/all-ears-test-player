import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import usePlayer from './hooks/usePlayer';
import ChapterMobile from './subComponents/ChapterMobile';
import ChapterDesktop from './subComponents/ChapterDesktop';

import utils from './utils';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import './styles/index.scss'
import './styles/player.scss'

SwiperCore.use([Navigation, Pagination]);


const Player = () => {
  const { chapters } = usePlayer();

  // TODO Switch between render ChapterMobile or ChapterDesktop
  const renderChapterMobile = (chapter) => {
    return (
      <ChapterMobile key={chapter.chapterNumber} chapter={chapter} />
    )
  }

  const renderChapterDesktop = (chapter) => {
    return (
      <ChapterDesktop key={chapter.chapterNumber} chapter={chapter} />
    )
  }

  const renderResponsiveChapter = (chapter) => {
    const isMobile = utils.mobileCheck();
    if (isMobile) {
      return renderChapterMobile(chapter);
    } else {
      return renderChapterDesktop(chapter);
    }
  }

  // EXTERNALISE
  // TODO: SAFARI BUG - ONLY USER ACTION CAN TRIGGER AUDIO PLAY - NO AUTO PLAY
  const handleSlideChange = (swiper) => {
    const prevAudio = utils.getAudioEl(swiper.previousIndex + 1);
    // const curAudio = utils.getAudioEl(swiper.realIndex + 1);

    if (!prevAudio.paused) {
      prevAudio.pause();
      // curAudio.play();
    }
  }

  return (
    <div className={utils.mobileCheck() ? "mobile-player player" : "desktop-player player"}>
      <Swiper
        slidesPerView={1}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next'
        }}
        pagination
        onSlideChange={handleSlideChange}
        simulateTouch={false}
      >
        {
          chapters && chapters.length > 1 ? chapters.map((chapter) => (
            <SwiperSlide key={chapter.chapterNumber}>
              {renderResponsiveChapter(chapter)}
            </SwiperSlide>
          )) :
          renderResponsiveChapter(chapters[0])
        }
      </Swiper>
    </div>
  );
}

export default Player;
