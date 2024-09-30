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
    <Swiper
      spaceBetween={8}
      slidesPerView="auto"
      className="relative grid w-full max-w-xl grid-cols-1 grid-rows-1 px-[62px] py-1 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-[62px] before:bg-white after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-[62px] after:bg-white"
      wrapperTag="menu"
      wrapperClass="col-start-1 col-end-2 row-start-1 row-end-2"
    >
      {categories.map((category, index) => (
        <SwiperSlide
          key={index}
          className="w-fit px-4 text-sm font-medium text-[hsla(0,7%,21%,1)]"
        >
          <Link to="/" className="menu-link w-fit">
            {category}
          </Link>
        </SwiperSlide>
      ))}
      <PrevArrow />
      <NextArrow />
    </Swiper>
  );
};

export default CategoriesSlider;
