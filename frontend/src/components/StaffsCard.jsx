import { MembersCard } from "../constants";

const StaffsCard = () => {
  return (
    <section className="min-h-auto px-4 md:px-[9%]">
      <h2 className="text-2xl font-bold text-center mb-15">OUR MEMBERS</h2>

      <div className="grid-4-cols">
        {MembersCard.map((card, index) => (
          <div key={index} className="staff-card-layout group">
            <img
              src={card.imageSrc}
              alt=""
              className="staff-images-layout"
            />
            <div className="staff-images-content">
              <h4 className="text-xl text-[#282732]">{card.name}</h4>
              <p className="text-sm my-2 text-[#282732]">
                {card.responsiblity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaffsCard;
