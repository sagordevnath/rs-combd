import React from "react";
import ServeImage1 from "../../assets/images/carousel/1.jpg";
import ServeImage2 from "../../assets/images/carousel/2.jpg";
import ServeImage3 from "../../assets/images/carousel/3.jpg";
import "./Serve.css";

const Serve = () => {
  return (
    <div>
      <section className="serve-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="serve-text">
                <h3>Industries We Serve</h3>
                <p>
                  If you’re searching for an advisor that delivers world-class
                  service and leading expertise, give us a call today or stop by
                  a local office to discuss how KerberRose can help.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <div className="single-serve">
                <img src={ServeImage1} alt="" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="single-serve">
                <img src={ServeImage2} alt="" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="single-serve">
                <img src={ServeImage3} alt="" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="single-serve">
                <img src={ServeImage1} alt="" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="single-serve">
                <img src={ServeImage2} alt="" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="single-serve">
                <img src={ServeImage3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Serve;
