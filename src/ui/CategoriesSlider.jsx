import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const categories = [
  "FDL league",
  "Basketball",
  "Handball",
  "Camel federation",
  "FDL league",
  "Basketball",
  "Handball",
  "Camel federation",
  "FDL league",
  "Basketball",
  "Handball",
  "Camel federation",
  "Handball",
  "Camel federation",
];

const PrevArrow = () => {
  const swiper = useSwiper();
  return (
    <button
      className="absolute left-1 top-1/2 z-50 w-fit -translate-y-1/2 rotate-90 rounded-full border border-[hsla(0,0%,79%,1)] bg-[hsla(0,0%,100%,1)] shadow-[0px_1.5px_3px_0px_hsla(0,0%,0%,0.08),_0px_0px_4.5px_0px_hsla(0,0%,0%,0.02)] ring-0 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-[hsla(273,70%,36%,1)]"
      aria-label="Previous category"
      onClick={() => swiper.slidePrev()}
    >
      <img src="/icons/chevron-down.svg" className="h-6 w-6 text-gray-600" />
    </button>
  );
};

const NextArrow = () => {
  const swiper = useSwiper();
  return (
    <button
      className="absolute right-1 top-1/2 z-50 w-fit -translate-y-1/2 -rotate-90 rounded-full border border-[hsla(0,0%,79%,1)] bg-[hsla(0,0%,100%,1)] shadow-[0px_1.5px_3px_0px_hsla(0,0%,0%,0.08),_0px_0px_4.5px_0px_hsla(0,0%,0%,0.02)] ring-0 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-[hsla(273,70%,36%,1)]"
      aria-label="Next category"
      onClick={() => swiper.slideNext()}
    >
      <img src="/icons/chevron-down.svg" className="h-6 w-6 text-gray-600" />
    </button>
  );
};

const CategoriesSlider = () => {
  return (
    <div className="mx-auto w-full max-w-[586px] overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        className="relative flex w-full flex-row items-center px-[54px] py-2 text-center text-sm font-medium text-[hsla(0,7%,21%,1)] before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-8 before:bg-white after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-8 after:bg-white"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Link to="/">{category}</Link>
          </SwiperSlide>
        ))}
        <PrevArrow />
        <NextArrow />
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;
