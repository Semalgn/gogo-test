import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { words } from "../constants";
import Button from "../components/Button";
import CourseButton from "../components/CourseButton";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      <div className="hero-layout flex flex-col md:flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 md:px-10">
      
        {/* Left : Hero Content */}

        <header className="flex flex-col justify-center w-screen px-5 md:px-12 md:items-center">
          <div className="flex flex-col gap-7 mb-8">
            <div className="hero-text">
              <h1>
                Learn
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <span className="text-[#FF7400]">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>-all in one place</h1>
            </div>
            <p className="md:text-xl relative z-10 pointer-events-none">
              Unlock your future with practical tech skills. At Googo Tech
              School, <br /> we empower you with real-world knowledge and
              hands-on <br />
              experience to thrive in the digital age.
            </p>
            <p className="md:text-2xl relative z-10 pointer-events-none font-semibold">
              start Your JOURNEY with US
            </p>

            <div className="flex gap-6 pt-4">
              <Button
                text="See More"
                className="md:w-80 md:h-16 w-60 h-12"
                id="counter"
              />
              <CourseButton
                text="Contact Us"
                className="md:w-80 md:h-16 w-60 h-12"
                id="contact"
              />
            </div>
          </div>
        </header>

        {/* Right: Hero Image */}
        
        <div className="hero-image">
          <img
            src="/images/hero-illustration.png"
            alt="Home Image"
            className="hero-illustration float-animation"
          />
        </div>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
