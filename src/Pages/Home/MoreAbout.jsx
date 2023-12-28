import React from "react";
import MoreAboutImage1 from "../../assets/images/details/section-bg-1.jpg";
import MoreAboutImage2 from "../../assets/images/details/section-bg-2.jpg";
import MoreAboutImage3 from "../../assets/images/details/banner-bg.jpg";
import "./MoreAbout.css";

const MoreAbout = () => {
  return (
    <div>
      <section className="more-about-area d-grid">
        <div className="more-about-img">
          <img src={MoreAboutImage1} alt="" />
        </div>
        <div className="more-about-text">
          <i class="fa-solid fa-rotate-right mb-3"></i>
          <h6>COMPANY HISTORY</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse et
            veritatis vitae, debitis sint ea laborum odit consequatur eveniet at
            error autem, labore repellat fugiat maiores aut numquam nesciunt
            voluptatum obcaecati culpa molestias accusamus voluptates. Impedit,
            saepe veniam.
          </p>
        </div>
        <div className="more-about-img">
          <img src={MoreAboutImage2} alt="" />
        </div>
        <div className="more-about-text">
          <i class="fa-solid fa-rotate-right mb-3"></i>
          <h6>COMPANY HISTORY</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse et
            veritatis vitae, debitis sint ea laborum odit consequatur eveniet at
            error autem, labore repellat fugiat maiores aut numquam nesciunt
            voluptatum obcaecati culpa molestias accusamus voluptates. Impedit,
            saepe veniam.
          </p>
        </div>
        <div className="more-about-img">
          <img src={MoreAboutImage3} alt="" />
        </div>
        <div className="more-about-text">
          <i class="fa-solid fa-rotate-right mb-3"></i>
          <h6>COMPANY HISTORY</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse et
            veritatis vitae, debitis sint ea laborum odit consequatur eveniet at
            error autem, labore repellat fugiat maiores aut numquam nesciunt
            voluptatum obcaecati culpa molestias accusamus voluptates. Impedit,
            saepe veniam.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MoreAbout;
