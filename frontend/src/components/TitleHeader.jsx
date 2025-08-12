const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5 my-10">
      <div className="header-badge text-[#055194e8]">
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-4xl text-3xl text-center mb-2">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
