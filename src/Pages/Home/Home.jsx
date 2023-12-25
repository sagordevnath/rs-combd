// import React from 'react';
import About from "./About";
import Banner from "./Banner";
import Blog from "./Blog";
import Details from "./Details";
import Industries from "./Industries";
import Professional from "./Professional";
import Services from "./Services";

const Home = () => {
  return (
    <div className="h-100 w-100">
      <Banner />
      <About />
      <Professional />
      <Blog />
      {/* <Industries /> */}
      {/* <Services /> */}
      <Details />
    </div>
  );
};

export default Home;
