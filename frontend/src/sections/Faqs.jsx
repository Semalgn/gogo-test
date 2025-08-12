import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { faqs } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first question
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  // GSAP animations for FAQs page
  useEffect(() => {
    // Animate left card (questions list) with slide-in from left
    gsap.fromTo(
      leftCardRef.current,
      {
        x: -80,
        opacity: 0,
        scale: 0.85,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftCardRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate right card (answer display) with slide-in from right
    gsap.fromTo(
      rightCardRef.current,
      {
        x: 80,
        opacity: 0,
        scale: 0.85,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightCardRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="section-padding">
      <div id="faqs" className="flex-center">
        <div className="w-full h-auto md:px-10 px-5">
          <TitleHeader sub="People Frequently Ask about " />

          <div className="mt-8 flex flex-col md:flex-row gap-3 mb-10">

            {/* Left Card - Questions List */}
            
            <div
              ref={leftCardRef}
              className="w-full md:w-1/3 rounded-[20px] shadow-sm shadow-[#055194e8] p-6 bg-[#ffffff]"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#ff7400]">FAQ</h2>
              <ul className="space-y-3 text-[#055194e8]">
                {faqs.map((faq, index) => (
                  <li key={index}>
                    <button
                      className={`w-full text-left p-3 rounded-[10px] transition-colors cursor-pointer ${
                        activeIndex === index
                          ? "bg-[#ff7400] font-medium text-white"
                          : "hover:bg-[#eeeee1]"
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      {faq.question}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card - Answer Display */}
            <div
              ref={rightCardRef}
              className="w-full md:w-2/3 rounded-[20px] shadow-sm shadow-[#055194e8] bg-[#fff] p-15"
            >
              <h3 className="text-xl text-[#ff7400] font-semibold mb-4">
                {faqs[activeIndex].question}
              </h3>
              <div className="text-[#055194e8] whitespace-pre-line">
                {faqs[activeIndex].answer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
