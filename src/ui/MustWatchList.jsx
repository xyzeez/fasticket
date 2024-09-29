import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Variables
export const mustWatchData = [
  {
    img: ["/images/must-watch-home-1.png", "/images/must-watch-away-1.png"],
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
  },
  {
    img: ["/images/must-watch-home-2.png", "/images/must-watch-away-2.png"],
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
  },
  {
    img: ["/images/must-watch-home-1.png", "/images/must-watch-away-1.png"],
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
  },
  {
    img: ["/images/must-watch-home-2.png", "/images/must-watch-away-2.png"],
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
  },
  {
    img: ["/images/must-watch-home-1.png", "/images/must-watch-away-1.png"],
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
  },
  {
    img: ["/images/must-watch-home-2.png", "/images/must-watch-away-2.png"],
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
  },
  {
    img: ["/images/must-watch-home-1.png", "/images/must-watch-away-1.png"],
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
  },
  {
    img: ["/images/must-watch-home-2.png", "/images/must-watch-away-2.png"],
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
  },
];

const PrevButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className="w-fit rotate-90 rounded-full border border-[hsla(0,0%,79%,1)] bg-[hsla(0,0%,100%,1)] shadow-[0px_1.5px_3px_0px_hsla(0,0%,0%,0.08),_0px_0px_4.5px_0px_hsla(0,0%,0%,0.02)] ring-0 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-[hsla(273,70%,36%,1)]"
      aria-label="Previouse Match"
      onClick={() => swiper.slidePrev()}
    >
      <img src="/icons/chevron-down.svg" className="h-6 w-6 text-gray-600" />
    </button>
  );
};

const NextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className="w-fit -rotate-90 rounded-full border border-[hsla(0,0%,79%,1)] bg-[hsla(0,0%,100%,1)] shadow-[0px_1.5px_3px_0px_hsla(0,0%,0%,0.08),_0px_0px_4.5px_0px_hsla(0,0%,0%,0.02)] ring-0 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-[hsla(273,70%,36%,1)]"
      aria-label="Next Match"
      onClick={() => swiper.slideNext()}
    >
      <img src="/icons/chevron-down.svg" className="h-6 w-6 text-gray-600" />
    </button>
  );
};

const MustWatchList = ({ data }) => {
  return (
    <Swiper
      tag="section"
      slidesPerView={1}
      spaceBetween={0}
      autoHeight={true}
      effect={"fade"}
      autoplay
      pagination={{
        el: "#customPagination",
        bulletClass: "swiper-custom-bullet",
        bulletActiveClass: "swiper-custom-bullet-active",
        clickable: true,
      }}
      modules={[EffectFade, Pagination, Autoplay]}
      className="inner px-4 py-6 lg:px-9 lg:py-16"
      wrapperTag="ul"
    >
      <div className="" slot="container-start">
        <div
          className="flex flex-row justify-between gap-4"
          slot="container-start"
        >
          <div>
            <h2 className="text-xl/6 font-semibold lg:text-2xl/6">
              Must see matches
            </h2>
            <p className="mb-6 mt-2 text-sm font-normal lg:text-base">
              Catch all the actions live
            </p>
          </div>
          <div className="hidden flex-row items-center gap-4 md:flex">
            <PrevButton />
            <NextButton />
          </div>
        </div>
      </div>
      <div
        id="customPagination"
        className="absolute inset-x-0 bottom-2 z-10 flex flex-row items-center justify-center gap-2 sm:hidden"
        slot="wrapper-end"
      ></div>
      {data.map(({ home, away, date, img }, index) => (
        <SwiperSlide
          tag="article"
          key={index}
          className="grid h-full max-h-[276px] grid-cols-1 grid-rows-1 overflow-hidden rounded-lg lg:max-h-[430px]"
        >
          <div className="sr-only">
            <h3>
              {home} versus {away}
            </h3>
            <time dateTime="2013-12-25 11:12">{date}</time>
          </div>
          <div className="grid grid-cols-1 grid-rows-2">
            <div className="z-10 col-start-1 col-end-2 row-start-1 row-end-2 m-auto mb-3 mix-blend-screen lg:mb-4">
              <span className="must-watch-text bg-white px-5 py-2 text-5xl font-extrabold lg:text-6xl">
                VS
              </span>
            </div>
            <button className="btn btn-big z-10 col-start-1 col-end-2 row-start-2 row-end-3 m-auto mt-3 lg:mt-4">
              Get ticket now
            </button>
            <div className="z-0 col-start-1 col-end-2 row-start-1 row-end-3 grid h-[276px] grid-cols-2 grid-rows-1 lg:h-[430px]">
              <img
                src={img[0]}
                alt=""
                className="col-start-1 col-end-2 row-start-1 row-end-2 h-full w-full object-cover object-center"
              />
              <img
                src={img[1]}
                alt=""
                className="col-start-2 col-end-3 row-start-1 row-end-2 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MustWatchList;
