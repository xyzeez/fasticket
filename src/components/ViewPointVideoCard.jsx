const ViewPointVideoCard = ({ data }) => {
  const { author, content, img, videoLink } = data;

  return (
    <article
      style={{ backgroundImage: `url(${img})` }}
      className="flex h-80 w-64 items-end rounded-lg bg-cover bg-center bg-no-repeat p-3 text-white lg:h-96 lg:w-72 lg:p-4"
    >
      <div className="mb-0 flex w-full max-w-[248px] flex-col gap-2 rounded bg-white p-3 text-black">
        <h1 className="order-2 text-xs font-bold">{author}</h1>
        <p className="order-1 line-clamp-2 text-xs font-normal">{content}</p>
        <a href={videoLink} className="btn btn-small btn-icon order-3 mt-1">
          <img src="/icons/play-circle-outline.svg" alt="" /> Watch video
        </a>
      </div>
    </article>
  );
};

export default ViewPointVideoCard;
