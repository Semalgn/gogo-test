import { abilities } from "../constants";
const Card = () => {
  return (
    <section
      id="services"
      class="flex flex-col items-center justify-center px-4 py-20 bg-[#eeeeee] text-white"
    >
      <div class="flex flex-wrap justify-center items-center gap-8 w-full max-w-7xl">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="services-box flex-1 min-w-[300px] max-w-sm bg-[#fff] border border-[#1f242d] transition-transform duration-500 ease-in-out hover:border-[#000000] hover:scale-105 rounded-2xl p-8 text-center cursor-pointer"
          >
            <div className="size-14 flex items-center justify-center rounded-full border">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-2xl font-semibold mt-4 mb-2">{title}</h3>
            <p class="text-lg my-4 text-[#ccc9c9]">{desc}</p>
          </div>
        ))}

        {/* <div class="services-box flex-1 min-w-[300px] max-w-sm bg-[#323946] border border-[#1f242d] transition-transform duration-500 ease-in-out hover:border-[#0ef] hover:scale-105 rounded-2xl p-8 text-center">
          <i class="bx bxs-palette text-5xl text-[#0ef]"></i>
          <h3 class="text-2xl font-semibold mt-4 mb-2">UI/UX Design</h3>
          <p class="text-lg my-4 text-[#ccc9c9]">
            <span class="dots block">
              Translate design concepts to user-friendly interface.
            </span>
            <span class="more-text hidden">
              Offer visually beautiful phenomenal experience, smooth transitions
              that improve UI and engagement without compromising performance.
            </span>
          </p>
          <button
            class="btn toggle-button bg-[#0ef] hover:brightness-110 text-[#1f242d] px-4 py-2 rounded-md transition"
            onclick="toggleText(this)"
          >
            Read More
          </button>
        </div>

        <div class="services-box flex-1 min-w-[300px] max-w-sm bg-[#323946] border border-[#1f242d] transition-transform duration-500 ease-in-out hover:border-[#0ef] hover:scale-105 rounded-2xl p-8 text-center">
          <i class="bx bxl-discord-alt text-5xl text-[#0ef]"></i>
          <h3 class="text-2xl font-semibold mt-4 mb-2">Graphics Design</h3>
          <p class="text-lg my-4 text-[#ccc9c9]">
            <span class="dots block">
              Designs connected with your brand & increases engagement.
            </span>
            <span class="more-text hidden">
              Specialized in designing logos, business cards, flyers, and
              brochures. I create unique and memorable designs that reflect your
              brand's identity and values. I also create social media graphics
              and marketing materials.
            </span>
          </p>
          <button
            class="btn toggle-button bg-[#0ef] hover:brightness-110 text-[#1f242d] px-4 py-2 rounded-md transition"
            onclick="toggleText(this)"
          >
            Read More
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Card;
