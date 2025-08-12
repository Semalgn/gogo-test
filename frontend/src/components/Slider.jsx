import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";

import { CourceCards } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const sliderRef = useRef(null);

  // GSAP animations for Slider page
  useEffect(() => {
    // Animate the entire slider section with fade-in and slide-up
    gsap.fromTo(
      sliderRef.current,
      {
        y: 60,
        opacity: 0,
        scale: 0.9,
      },
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

    // Animate individual slides with staggered effect
    const slides = sliderRef.current?.querySelectorAll(".swiper-slide");
    if (slides) {
      gsap.fromTo(
        slides,
        {
          y: 40,
          opacity: 0,
          scale: 0.9,
        },
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
  }, []);

  return (
    <section ref={sliderRef} className="flex-center px-4 py-8">
      <div className="container mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Autoplay]}
          className="relative"
        >
          {CourceCards.map((card, index) => (
            <SwiperSlide key={index}>
              <a href={card.link} className="group cource-card-layout">
                <img
                  src={card.image}
                  alt="Card Image"
                  className="w-full aspect-[16/9] object-cover rounded-lg"
                />
                <p
                  className={`px-4 py-2 text-md font-semibold my-4 inline-block rounded ${card.badgeColor} ${card.badgeBg}`}
                >
                  {card.title}
                </p>
                <h2 className="text-sm font-small text-white p-3">
                  {card.desc}
                </h2>
              </a>
            </SwiperSlide>
          ))}
          {/* Navigation buttons */}

          <div className="swiper-button-prev swiper-btn-left"></div>
          <div className="swiper-button-next swiper-btn-right"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
