import AboutCard from "../components/AboutCard";
import StaffsCard from "../components/StaffsCard";
import TitleHeader from "../components/TitleHeader";

const About = () => {
  return (
    <div id="about" className="section-padding">
      <div className="w-full h-auto md:px-0 px-3">
        <TitleHeader title="About Googo" sub="About Us" />
        <AboutCard />
        <StaffsCard />
      </div>
    </div>
  );
};

export default About;
