import { abilities } from "../constants";

const AboutCard = () => {
  return (
    <div className="w-full md:px-22 my-10">
      <div className="mx-auto grid-3-cols place-items-center">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <div
            key={title}
            className={`services-box about-card-layout
              ${
                index === 2
                  ? "sm:col-span-2 sm:mx-auto md:col-span-2 md:mx-auto lg:col-span-1"
                  : ""
              }
            `}
          >
            <div className="size-14 flex-center rounded-full border">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-xl font-semibold m-3">{title}</h3>
            <p className="text-xl">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
