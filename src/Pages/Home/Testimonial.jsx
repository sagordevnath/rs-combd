import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="testimonial-text">
              <p className="mb-3">
                So grateful to Jane at KerberRose. I’ve been in business for 7
                years and this is my FOURTH attempt at finding a competent
                accountant.
              </p>
              <h5 className="mb-4">TAMMY G, KERBERROSE OSHKOSH</h5>
              <a href="#">LEAVE A COMMENT</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
