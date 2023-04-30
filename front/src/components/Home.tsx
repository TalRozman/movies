import React,{useState} from 'react'
import NewCardsCarousel from './NewCardsCarousel'
import { data } from '../data'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slides.css";
import { Pagination, Navigation } from "swiper";

const Home = () => {
    const [randomNumber, setrandomNumber] = useState(Math.round(Math.random() * 10))
    setInterval(()=>setrandomNumber(Math.round(Math.random() * 150)),20000)
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide style={{backgroundColor:'black'}}>
                    <img src={data.movies[randomNumber].posterUrl} style={{width:'25%',maxWidth:'100%',height:'50%'}}/>
                </SwiperSlide>
            </Swiper>
            {data.genres.map((gnr, index) =>
                <div key={index}>
                    <h2 style={{color:'white'}}>
                        {gnr}&nbsp;&nbsp;
                        <a href={'/movies/' + gnr} style={{ textDecoration: 'none', color: 'white', fontSize: '12px' }}>Browse All!</a>
                    </h2>
                    <NewCardsCarousel category={gnr} />
                    <br /><br />
                </div>)}
        </div>
    )
}

export default Home