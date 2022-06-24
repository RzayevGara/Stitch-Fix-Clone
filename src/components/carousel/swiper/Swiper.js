import React, {useState, useEffect, useRef} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper";
import PlayButton from '../../play-button/PlayButton'

import SliderVideoFirst from '../../../assets/videos/Summer_merch.webm'
import SliderVideoSecond from '../../../assets/videos/Women_resort.webm'
import SliderVideoThird from '../../../assets/videos/Women_workwear.webm'

import SliderImageFirst from '../../../assets/images/jpg-images/Carousel_2_W_jeans.jpg'
import SliderImageSecond from '../../../assets/images/jpg-images/Layered_image.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";



export default function Swipe() {
    const videoDom = useRef([])
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
      if (window.innerWidth < 550) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }
  
    useEffect(()=>{
      window.addEventListener("resize", handleResize)
    })
  return (
    <div className="swiper-container">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        navigation ={isMobile?false:true}
        modules={[Scrollbar, Navigation]}
        className="mySwiper"
        slidesPerView={"auto"}
        spaceBetween={10}
      >
            <SwiperSlide>
                <video ref={(element) => {videoDom.current[0] = element}} src={SliderVideoFirst} muted={true} loop autoPlay></video>
                <PlayButton index={0} videoRef={videoDom}/>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-slide_container">
                    <img src={SliderImageFirst} alt="pic"/>
                    <div>
                        <p>We know fit—we’ll find yours</p>
                        <p>Jeans from $44 to $250</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <video ref={(element) => {videoDom.current[1] = element}} src={SliderVideoSecond} muted={true} loop autoPlay></video>
                <PlayButton index={1} videoRef={videoDom}/>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-slide_container">
                    <img src={SliderImageSecond} alt="pic"/>
                    <div>
                        <p>Dress up for your kind of vacation</p>
                        <p>Accessories from $28 - $175</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <video ref={(element) => {videoDom.current[2] = element}} src={SliderVideoThird} muted={true} loop autoPlay></video>
                <PlayButton index={2} videoRef={videoDom}/>
            </SwiperSlide>
      </Swiper>
    </div>
  );
}