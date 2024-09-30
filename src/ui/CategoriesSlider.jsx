import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

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
      className="rounded-btn absolute left-1 top-1/2 z-50 -translate-y-1/2"
      aria-label="Previous category"
      onClick={() => swiper.slidePrev()}
    >
      <ChevronLeftIcon className="size-6 transition-colors" />
    </button>
  );
};

const NextArrow = () => {
  const swiper = useSwiper();
  return (
    <button
      className="rounded-btn absolute right-1 top-1/2 z-50 -translate-y-1/2"
      aria-label="Next category"
      onClick={() => swiper.slideNext()}
    >
      <ChevronRightIcon className="size-6 transition-colors" />
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
            <Link to="/" className="menu-link">
              {category}
            </Link>
          </SwiperSlide>
        ))}
        <PrevArrow />
        <NextArrow />
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;
