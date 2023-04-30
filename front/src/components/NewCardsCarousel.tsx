import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slides.css";

import { Pagination,Navigation,Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { data } from '../data'

const NewCardsCarousel = (props: any) => {
  const categoryMovies = data.movies.filter((movie) => movie.genres.filter((gnr) => props.category === gnr).length > 0)

  return (
    <div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        {categoryMovies.map((movie, index) =>
          <SwiperSlide key={index}>
            <img src={movie.posterUrl} style={{ width: '300px', height: '300px',maxWidth:'100%' }} alt={movie.title} />
          </SwiperSlide>)}
          <br/><br/>
      </Swiper>
    </div>
  )
}

export default NewCardsCarousel