import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

// Utils
import { extractDate, extractTime } from "../utils";

// Dummy Data
export const moreMatchData = [
  {
    img: "/images/more-card-1.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-2.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-3.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-4.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-1.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-2.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-3.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-4.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-1.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-2.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-3.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-4.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-1.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-2.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-3.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/more-card-4.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
];

const NextArrow = () => {
  const swiper = useSwiper();
  return (
    <button
      className="rounded-btn mr-1"
      aria-label="Next category"
      onClick={() => swiper.slideNext()}
    >
      <ChevronRightIcon className="size-6 transition-colors" />
    </button>
  );
};

const MoreMatchSlider = ({ data }) => {
  return (
    <Swiper
      tag="section"
      slidesPerView="auto"
      spaceBetween={18}
      className="inner max-w-[1208px] px-4 py-6 lg:px-9 lg:py-16 xl:px-0"
    >
      <div
        className="flex flex-row justify-between gap-4 px-4 lg:px-0"
        slot="container-start"
      >
        <div>
          <h2 className="text-xl/6 font-semibold lg:text-2xl/6">
            More FDL matches
          </h2>
          <p className="mb-6 mt-2 text-sm font-normal lg:text-base">
            Watch the league favorites play each other
          </p>
        </div>
        <div className="hidden flex-row items-center gap-2 md:flex">
          <p className="text-sm font-normal lg:text-base">
            Explore all matches
          </p>
          <NextArrow />
        </div>
      </div>
      {data.map(({ home, away, date, price, img }, index) => (
        <SwiperSlide
          key={index}
          tag="article"
          className="flex w-auto max-w-64 flex-col-reverse overflow-hidden rounded-lg bg-white lg:max-w-72"
        >
          <div className="flex flex-col items-start justify-between gap-1 p-4 text-black">
            <h3 className="text-base font-semibold">
              {home}
              <span className="mx-3 text-sm font-normal">vs</span>
              {away}
            </h3>
            <time
              dateTime="2013-12-25 11:12"
              className="text-sm text-[hsla(0,0%,44%,1)]"
            >
              {extractDate(date)} - {extractTime(date)} KSA
            </time>
            <p className="text-sm">
              from <span className="text-base font-semibold">{price} SAR</span>
            </p>
          </div>
          <img
            src={img}
            alt=""
            className="w-full rounded-lg object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MoreMatchSlider;
