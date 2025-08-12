import GalleryCard from "../components/GalleryCard";
import TitleHeader from "../components/TitleHeader";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);

  // GSAP animations for Gallery page
  useEffect(() => {
    // Animate gallery cards with staggered fade-in and scale effect
    const galleryCards = galleryRef.current?.querySelectorAll(".gallery-card");
    if (galleryCards) {
      gsap.fromTo(
        galleryCards,
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
          rotationY: -15,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section id="gallery" ref={galleryRef} className="section-padding">
      <TitleHeader title="Our Gallery" sub="Gallery" />
      <GalleryCard />
    </section>
  );
};

export default Gallery;
