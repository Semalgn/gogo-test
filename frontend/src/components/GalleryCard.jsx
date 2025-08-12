import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";

import { galleryImages } from "../constants";

gsap.registerPlugin(ScrollTrigger);

// Helper function to chunk cards
const chunkCards = (cards, size) => {
  const chunks = [];
  for (let i = 0; i < cards.length; i += size) {
    chunks.push(cards.slice(i, i + size));
  }
  return chunks;
};

const GalleryCard = () => {
  const sliderRef = useRef(null);
  const [chunkedCards, setChunkedCards] = useState([]);
  const [chunkSize, setChunkSize] = useState(6); // Default for desktop

  // Detect screen size and set appropriate chunking
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setChunkSize(3); // Mobile
      } else if (width < 1024) {
        setChunkSize(3); // Tablet
      } else {
        setChunkSize(6); // Desktop
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Update chunked slides when screen size or images change
  useEffect(() => {
    setChunkedCards(chunkCards(galleryImages, chunkSize));
  }, [chunkSize]);

  // GSAP animations
  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const cards = sliderRef.current?.querySelectorAll(".gallery-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.0,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [chunkedCards]);

  return (
    <section className="min-h-screen px-6 py-6 xl:px-20 xl:py-2">
      <div ref={sliderRef}>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="relative"
        >
          {chunkedCards.map((group, index) => (
            <SwiperSlide key={index}>

              {/* Layout differs for mobile/tablet/desktop */}
              
              <div
                className={`${
                  chunkSize === 6
                    ? "grid grid-cols-1 md:grid-cols-3 gap-5"
                    : "flex flex-col gap-6"
                }`}
              >
                {group.map((image, idx) => (
                  <div
                    key={idx}
                    className="gallery-card relative rounded-sm overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={image.imageSrc}
                      alt={image.alt}
                      className="w-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="gallery-card-content">
                      <h4 className="text-md text-[#020B0F]">{image.desc}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GalleryCard;
