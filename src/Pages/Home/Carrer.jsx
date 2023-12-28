import React from "react";
import CarrerImage from "../../assets/images/details/banner-bg.jpg";
import "./Carrer.css";

const Carrer = () => {
  return (
    <div>
      <section className="carrer-area">
        <div className="carrer-img">
          <img src={CarrerImage} alt="" />
        </div>
        <div className="carrer-text">
          <p>ADVANCE IN A REWARDING CAREER</p>
          <h3>RS Commution Team</h3>
          <p className="mb-3">
            Our team of professionals greets challenges with passion and
            enthusiasm. We are always looking to attract individuals with the
            desire to be a team player and pursue a rewarding career. Whether
            you are a recent graduate or seasoned professional, a challenging
            and satisfying career is awaiting you at KerberRose. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quas quisquam,
            voluptatem reprehenderit accusamus nobis.
          </p>
          <a href="#">Browse Job</a>
        </div>
      </section>
    </div>
  );
};

export default Carrer;
