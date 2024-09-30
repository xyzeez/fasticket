import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

// Components
import ViewPointCard from "../components/ViewPointCard";
import ViewPointVideoCard from "../components/ViewPointVideoCard";

// Dummy Data
export const viewPointsData = [
  {
    author: "Al Shuaib",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae dolorem aliquam fuga similique cum eveniet.",
    img: "/images/view-point-1.png",
    videoLink: "",
  },
  {
    author: "Al Shuaib",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae dolorem aliquam fuga similique cum eveniet.",
    img: "/images/view-point-2.png",
    videoLink: "www.youtube.com",
  },
  {
    author: "Al Shuaib",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae dolorem aliquam fuga similique cum eveniet.",
    img: "/images/view-point-1.png",
    videoLink: "www.youtube.com",
  },
  {
    author: "Al Shuaib",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae dolorem aliquam fuga similique cum eveniet.",
    img: "/images/view-point-2.png",
    videoLink: "",
  },
];

const NextArrow = () => {
  const swiper = useSwiper();
  return (
    <button
      className="rounded-btn scale-95"
      aria-label="Next View Point"
      onClick={() => swiper.slideNext()}
    >
      <ChevronLeftIcon className="size-6 transition-colors" />
    </button>
  );
};

const FansViewPoints = ({ relativeClasses, data }) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={16}
      grabCursor
      breakpoints={{
        1024: {
          spaceBetween: 0,
        },
      }}
      className={`${relativeClasses} px-4 lg:grid lg:grid-cols-[3.5rem_1fr] lg:grid-rows-1 lg:px-0 lg:pr-20 xl:grid-cols-[8rem_1fr] xl:pr-[9.5rem]`}
      wrapperTag="ul"
      wrapperClass="lg:col-start-2  lg:col-end-3 lg:row-start-1 lg:row-end-2"
    >
      <div
        className="gradient z-10 hidden -translate-x-1 scale-105 flex-row items-center pl-3 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:flex"
        slot="container-start"
      >
        <NextArrow />
      </div>
      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          className="grid w-fit grid-cols-1 grid-rows-1 lg:pl-6 lg:transition-transform lg:duration-500 lg:[&.swiper-slide-next]:-translate-y-[5%] lg:[&.swiper-slide-next]:translate-x-[5%] lg:[&.swiper-slide-next]:scale-[90%] lg:[&.swiper-slide-next]:pl-0 lg:last:[&.swiper-slide-next]:-translate-y-[0%] lg:last:[&.swiper-slide-next]:translate-x-[0%] lg:last:[&.swiper-slide-next]:scale-[100%] lg:last:[&.swiper-slide-next]:pl-6"
        >
          {item.videoLink ? (
            <ViewPointVideoCard data={item} />
          ) : (
            <ViewPointCard data={item} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FansViewPoints;
