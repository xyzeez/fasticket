// Variables
const results = [
  {
    home: {
      team: "Al-Hilal",
      goals: 2,
    },
    away: {
      team: "Al Kholud",
      goals: 1,
    },
    img: "/images/result-1.png",
  },
  {
    home: {
      team: "Al-Hilal",
      goals: 0,
    },
    away: {
      team: "Al Kholud",
      goals: 0,
    },
    img: "/images/result-2.png",
  },
  {
    home: {
      team: "Al-Hilal",
      goals: 1,
    },
    away: {
      team: "Al Kholud",
      goals: 1,
    },
    img: "/images/result-3.png",
  },
];

const ResultsBoard = ({ relativeClasses }) => {
  return (
    <div
      className={`${relativeClasses} mx-auto grid min-h-[268px] w-full max-w-lg -translate-x-[7%] grid-cols-3 grid-rows-1 *:bg-[length:100%_100%] *:bg-center *:bg-no-repeat sm:-translate-x-[5%] lg:max-w-[752px] lg:translate-x-0`}
    >
      {results.map((item, index) => (
        <article
          key={index}
          style={{ "--img-url": `url(${item.img})` }}
          className="result-clip flex min-w-[135%] flex-col items-start justify-end bg-[linear-gradient(0deg,rgba(0,0,0,1),rgba(0,0,0,0.5),rgb(0,0,0,0)),var(--img-url)] pb-4 pl-6 text-white max-[639px]:first:pl-10 sm:pl-8"
        >
          <h2 className="mb-2 text-xs font-semibold lg:text-sm">
            {item.home.team} vs
            <span className="block">{item.away.team}</span>
          </h2>
          <p className="text-sm font-bold lg:text-base">
            Result {item.home.goals}-{item.away.goals}
          </p>
        </article>
      ))}
    </div>
  );
};

export default ResultsBoard;
