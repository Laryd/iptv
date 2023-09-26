import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Autoplay,EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Details from "./Details";

 

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
          <img src="src\assets\images\img_1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/img_2.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/img_3.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/img_4.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/img_5.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/img_6.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/img_7.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/img_8.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/img_9.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/img_10.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/img_11.jpg" alt="slide_image" />
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
      <Details/>
    </div>
  );
};

export default SwiperF;
