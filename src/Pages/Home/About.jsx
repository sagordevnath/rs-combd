import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen about">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">About RS Communications</h1>
          <p className="mb-5">
            Viewpoints from RS Communications leaders and subject matter experts from around the world!
          </p>
          <button className="btn btn-primary">Read Our Blog <i class="fa-solid fa-chevron-right ml-3"></i> </button>
        </div>
      </div>
    </div>
  );
};

export default About;
