import { ChevronRightIcon } from "@heroicons/react/16/solid";

// Utils
import { extractDate, extractTime } from "../utils";

// Dummy Data
export const upcomingData = [
  {
    img: "/images/upcoming-card-1.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/upcoming-card-2.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
  {
    img: "/images/upcoming-card-3.png",
    home: "Al-Qadsiah",
    away: "Al-Kholood",
    date: "2024-02-11T10:30:00Z",
    price: "150",
  },
];

const UpcomingCard = ({ data }) => {
  const { home, away, date, price, img } = data;

  return (
    <article className="flex w-full max-w-64 flex-col-reverse overflow-hidden rounded-lg bg-[hsla(260,36%,21%,1)] lg:max-w-[387px]">
      <div className="flex flex-wrap items-start justify-between gap-4 p-4">
        <div className="text-white">
          <h3 className="text-base font-semibold">
            {home}
            <span className="mx-3 text-sm font-normal">vs</span>
            {away}
          </h3>
          <time dateTime="2013-12-25 11:12" className="text-sm">
            {extractDate(date)} - {extractTime(date)} KSA
          </time>
          <p className="text-sm">
            from <span className="text-base font-semibold">{price} SAR</span>
          </p>
        </div>
        <button className="btn btn-icon btn-small">
          Get Ticket
          <ChevronRightIcon className="size-4" />
        </button>
      </div>
      <img src={img} alt="" className="w-full object-cover object-center" />
    </article>
  );
};

export default UpcomingCard;
