const Hamburger = ({ isOpen }) => {
  return (
    <span className="relative mx-auto flex h-3 w-[18px] flex-col justify-between *:absolute *:block *:h-[2px] *:w-full *:bg-white *:transition-all *:duration-300">
      <span
        className={`${isOpen ? "top-1/2 rotate-45" : "top-0 rotate-0"}`}
      ></span>
      <span
        className={`${isOpen ? "opacity-0" : "top-1/2 rotate-0 opacity-100"}`}
      ></span>
      <span
        className={`${isOpen ? "top-1/2 -rotate-45" : "top-full rotate-0"}`}
      ></span>
    </span>
  );
};

export default Hamburger;
