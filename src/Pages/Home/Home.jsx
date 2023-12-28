// import React from 'react';
import About from "./About";
import Banner from "./Banner";
import Blog from "./Blog";
import Carrer from "./Carrer";
import Details from "./Details";
import GetInTouch from "./GetInTouch";
import Industries from "./Industries";
import MoreAbout from "./MoreAbout";
import Professional from "./Professional";
import Serve from "./Serve";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="h-100 w-100">
      <Banner />
      <About />
      <Professional />
      <Serve />
      <Carrer />
      <GetInTouch />
      <MoreAbout />
      <Testimonial />
      <Blog />
      {/* <Industries /> */}
      {/* <Services /> */}
      {/* <Details /> */}
    </div>
  );
};

export default Home;
