const ViewPointCard = ({ data }) => {
  const { author, content, img } = data;

  return (
    <article
      style={{ backgroundImage: `url(${img})` }}
      className="relative flex h-80 w-64 flex-col-reverse overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-3 text-white lg:h-96 lg:w-72 lg:p-4"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <h1 className="z-10 text-xs font-bold">{author}</h1>
      <p className="z-10 mb-3 mt-auto max-w-[25ch] text-xs font-normal">
        {content}
      </p>
    </article>
  );
};

export default ViewPointCard;
