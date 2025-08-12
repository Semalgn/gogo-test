import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";

import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sliderRef = useRef(null);

  // GSAP animations for Testimonials page
  useEffect(() => {
    // Animate the entire testimonials section with fade-in and slide-up
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

    // Animate individual testimonials with staggered effect
    const testimonials =
      sliderRef.current?.querySelectorAll(".testimonial-card");
    if (testimonials) {
      gsap.fromTo(
        testimonials,
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
    <section
      ref={sliderRef}
      id="testimonials"
      className="flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Testimonials"
          sub="Customer feedback highlights"
        />
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Autoplay]}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonial-card">
              <GlowCard card={testimonial} index={index}>
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      src={testimonial.imgPath}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#055194e8]">
                      {testimonial.name}
                    </p>
                    <p className="text-[#055194e8]">{testimonial.mentions}</p>
                  </div>
                </div>
              </GlowCard>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev !text-[#5372f0] dark:!text-[#5372f0] -left-6 sm:-left-10 top-[45%] z-10"></div>
          <div className="swiper-button-next !text-[#5372f0] dark:!text-[#5372f0] -right-6 sm:-right-10 top-[45%] z-10"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
