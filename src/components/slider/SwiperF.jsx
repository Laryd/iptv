import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import Details from "./Details";
import img_1 from '../../assets/images/img_1.jpg'
import img_2 from '../../assets/images/img_2.jpg'
import img_3 from '../../assets/images/img_3.jpg'
import img_4 from '../../assets/images/img_4.jpg'
import img_5 from '../../assets/images/img_5.jpg'
import img_6 from '../../assets/images/img_6.png'
import img_7 from '../../assets/images/img_7.jpg'
import img_8 from '../../assets/images/img_8.jpg'
import img_9 from '../../assets/images/img_9.png'
import img_10 from '../../assets/images/img_10.jpg'
import img_11 from '../../assets/images/img_11.jpg'
const SwiperF = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={2500}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 1,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={img_10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={img_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={img_9} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <AiOutlineLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <AiOutlineRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      <Details />
    </div>
  );
};

export default SwiperF;
