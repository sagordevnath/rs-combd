import "./About.css";
import AboutBanner from "./AboutBanner";
import AboutTwo from "./AboutTwo";
import MissionVision from "./MissionVision";
import Testimonial from "../Home/Testimonial";
import MoreAbout from "./MoreAboutTwo";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutTwo />
      <MissionVision />
      <MoreAbout />
      <OurTeam />
      <Testimonial />
    </div>
  );
};

export default About;
