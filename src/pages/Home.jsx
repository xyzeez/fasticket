import { Link } from "react-router-dom";

// Components
import UpcomingCard, { upcomingData } from "../components/UpcomingCard";

// UIs
import SearchForm from "../ui/SearchForm";
import ResultsBoard from "../ui/ResultsBoard";
import MoreMatchSlider, { moreMatchData } from "../ui/MoreMatchSlider";
import MustWatchList, { mustWatchData } from "../ui/MustWatchList";
import FansViewPoints, { viewPointsData } from "../ui/FansViewPoints";

const Home = () => {
  return (
    <main className="">
      <section className="grid bg-[hsla(240,31%,10%,1)] bg-[url('/images/hero-bg.png')] bg-cover bg-left-top bg-no-repeat pt-[87px] sm:pb-10 lg:min-h-[528px] lg:p-[29px]">
        <div className="inner grid grid-cols-1 grid-rows-[auto_1fr] gap-14 overflow-x-hidden lg:grid-cols-[auto_1fr] lg:grid-rows-1 lg:gap-0">
          <div className="flex flex-col items-center px-8 text-center text-white lg:my-auto lg:ml-[47px] lg:items-start lg:px-0 lg:text-start">
            <h1 className="w-full text-2xl font-bold lg:max-w-[16ch] lg:text-[40px]/[48px]">
              Watch the FDL matches live
            </h1>
            <p className="mb-8 mt-2 w-full max-w-[26ch] text-base lg:mb-8 lg:max-w-full lg:text-lg">
              Buy tickets and catch all the excitement live
            </p>
            <div className="w-full lg:hidden">
              <SearchForm />
            </div>
            <Link to="/" className="btn btn-big hidden lg:block">
              Explore tickets
            </Link>
            <p className="mt-[41px] hidden flex-row items-center gap-[17px] text-xs font-semibold lg:flex">
              Supported by
              <img
                src="/images/fdl.png"
                alt="First Division League"
                className="inline-block"
              />
            </p>
          </div>
          <ResultsBoard relativeClasses="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3 lg:ml-auto" />
        </div>
      </section>
      <section className="inner pb-6 pt-14 lg:px-9 lg:pb-16 lg:pt-24">
        <div className="px-4 lg:px-0">
          <h2 className="text-xl/6 font-semibold lg:text-2xl/6">
            Upcoming weekend duels
          </h2>
          <p className="mb-6 mt-2 text-sm font-normal lg:text-base">
            Watch the league favorites play each other live
          </p>
        </div>
        <div className="no-scrollbar flex snap-x snap-proximity flex-row items-center justify-between gap-4 overflow-x-scroll px-4 *:shrink-0 *:snap-center lg:gap-6 lg:p-0">
          {upcomingData.map((data, index) => (
            <UpcomingCard key={index} data={data} />
          ))}
        </div>
      </section>
      <MoreMatchSlider data={moreMatchData} />
      <MustWatchList data={mustWatchData} />
      <section className="inner grid grid-cols-1 grid-rows-[auto_1fr] gap-6 py-6 lg:grid-cols-[auto_1fr] lg:grid-rows-1 lg:gap-14 lg:px-9 lg:py-16 xl:gap-36">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 px-4 lg:my-auto lg:max-w-[33ch] lg:px-0">
          <h2 className="text-xl/6 font-semibold lg:text-4xl/[48px] lg:font-bold">
            Fans view point and opinions
          </h2>
          <p className="mt-2 text-sm font-normal lg:text-base">
            Dive into the heart of opinions, where every viewpoint is a unique
            story waiting to be told.
          </p>
        </div>
        <FansViewPoints
          relativeClasses="col-start-1 col-end-2 row-start-2 row-end-3 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2"
          data={viewPointsData}
        />
      </section>
      <section className="inner px-4 py-12 lg:px-9 lg:py-24">
        <div className="relative overflow-hidden rounded-lg bg-[url('/images/final.png')] bg-cover bg-center bg-no-repeat px-4 py-10 md:p-10 lg:p-28">
          <div className="absolute inset-y-0 left-0 z-0 w-2/3 bg-[linear-gradient(90deg,#1F223A_7.13%,#262B40_28.67%,#2A2D43_41.59%,rgba(28,25,25,0)_100%)]"></div>
          <div className="relative z-10 flex w-full flex-col items-center justify-center text-white md:max-w-fit md:justify-start">
            <h2 className="text-4xl font-bold">KING CUP</h2>
            <p className="my-4 flex flex-row items-center gap-5 lg:my-8">
              <img src="/images/final-home.png" alt="" className="size-16" />
              <span className="sr-only">Al Qadsiah</span>
              <span className="text-xl font-medium">VS</span>
              <span className="sr-only">Al Oroobah</span>
              <img src="/images/final-away.png" alt="" className="size-16" />
            </p>
            <time dateTime="">Feb 21 - 11:56 KSA</time>
            <button className="btn btn-icon btn-small mt-5 lg:mt-10">
              Get Ticket
              <img src="/icons/chevron-right.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
      <aside className="inner flex flex-col items-center gap-12 px-4 py-6 lg:gap-28 lg:px-9 lg:py-16">
        <div className="order-2 max-w-[28ch] text-center md:max-w-max">
          <h2 className="text-2xl font-bold text-[hsla(80,13%,19%,1)] lg:text-4xl">
            Experience a betterway to buy tickets
          </h2>
          <p className="mt-4 text-base font-normal text-[hsla(120,1%,27%,1)]">
            Never miss your favorite team play
          </p>
        </div>
        <picture className="order-1 w-full max-w-96 overflow-hidden rounded-lg md:max-w-[1000px]">
          <source
            media="(min-width: 768px)"
            srcSet="/public/images/advert-desktop.svg"
          />
          <img src="/public/images/advert.svg" alt="" className="w-full" />
        </picture>
      </aside>
    </main>
  );
};

export default Home;
