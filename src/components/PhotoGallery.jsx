import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Mousewheel,
  Navigation,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import Wrapper from "./Wrapper";

const SwiperImages = [
  "/img1 (11).webp",
  "/img1 (3).webp",
  "/img1 (13).webp",
  "/img1 (4).webp",
  "/img1 (6).webp",
  "/img1 (7).webp",
  "/img1 (5).webp",
  "/img1 (8).webp",
  "/img1 (10).webp",
];

function PhotoGallery() {
  return (
    <div>
      <Wrapper>
        <h1 className="mb-7 text-[40px] font-eb text-center mt-8 text-[#c49a42] sm:mb-3 capitalize">
          Photo Gallery
        </h1>
         <p className="font-eb text-center align-middle items-center">
          a few moments
        </p>
        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation, Scrollbar]}
          parallax
          effect="coverflow"
          coverflowEffect={{ rotate: 115, stretch: 70 }}
          navigation
          autoplay={{ delay: 3000 }}
          mousewheel
          className="w-full h-[400px] sm:h-[90vh] bg-[#eee5d2] flex justify-center items-center rounded-2xl my-15 sm:my-25"
        >
          {SwiperImages.map((image, index) => (
            <SwiperSlide
              className="w-full h-full p-1  bg-gradient-to-br from-[#a98b35] via-[#3e3a1] to-[#b69a45] "
              key={index}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </div>
  );
}

export default PhotoGallery;
