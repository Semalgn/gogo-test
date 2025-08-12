import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const formCardRef = useRef(null);
  const infoCardsRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // GSAP animations for contact page
  useEffect(() => {
    // Animate form card with slide-up and fade-in
    gsap.fromTo(
      formCardRef.current,
      { 
        y: 80, 
        opacity: 0,
        scale: 0.85
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formCardRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate info cards with staggered slide-up effect
    const infoCards = infoCardsRef.current?.children;
    if (infoCards) {
      gsap.fromTo(
        infoCards,
        { 
          y: 60, 
          opacity: 0,
          scale: 0.9
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1.0,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infoCardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Contact Us!"
          sub="Have questions or ideas? Let’s talk!"
        />

        <div className="grid-12-cols mt-16 mb-15">
          <div className="xl:col-span-6">
            <div ref={formCardRef} className="flex-center card-border rounded-xl p-10 shadow-md shadow-[#055194e8] bg-[#c7cbcb]">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-2"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What is your name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="cursor-pointer">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div ref={infoCardsRef} className="xl:col-span-5 min-h-auto space-y-7">
            <div className="p-8 bg-[#bcc0c0] shadow-md shadow-[#055194e8] rounded-3xl flex items-center gap-8">
              <div className="bg-[#fff] rounded-full p-2">
                <FaMapMarkerAlt className="text-[#ff7400]" />
              </div>
              <div>
                <p className="font-semibold text-[#055194e8]">Address</p>
                <p className="text-[#055194e8]">Hossana, Ethiopia</p>
                <p className="text-[#055194e8]">Choramo Plaza</p>
              </div>
            </div>
            <div className="p-8 bg-[#bcc0c0] shadow-md shadow-[#055194e8] rounded-3xl flex items-center gap-8">
              <div className="bg-[#fff] rounded-full p-2">
                <FaPhoneAlt className="text-[#ff7400]" />
              </div>
              <div>
                <p className="font-semibold text-[#055194e8]">Phone</p>
                <p className="text-[#055194e8]">+251-911-00-00-00</p>
              </div>
            </div>
            <div className="p-8 bg-[#bcc0c0] shadow-md shadow-[#055194e8] rounded-3xl flex items-center gap-8">
              <div className="bg-[#fff] rounded-full p-2">
                <FaEnvelope className="text-[#ff7400]" />
              </div>
              <div>
                <p className="font-semibold text-[#055194e8]">Email</p>
                <p className="text-[#055194e8]">googo@email.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
