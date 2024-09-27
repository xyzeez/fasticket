import { Link } from "react-router-dom";

// UIs
import SearchForm from "../ui/SearchForm";
import ResultsBoard from "../ui/ResultsBoard";

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
            <Link to="/" className="btn hidden lg:block">
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
    </main>
  );
};

export default Home;
