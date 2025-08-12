import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Cources from "./sections/Cources";
import Faqs from "./sections/Faqs";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Cources />
      <Gallery />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />

    </>
  );
};

export default App;
