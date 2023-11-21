// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Industries = () => {
  return (
    <div className="py-8">      
        <h1 className="text-5xl text-center mb-5 mt-5">Industries</h1>
        <div className="grid grid-cols-3 gap-4 px-5">
          <div>
            <div data-aos="zoom-in" className="card shadow-xl bg-blue-400">
              <i class="fa-solid fa-box-open text-blue-600 ml-6 text-5xl text-center mt-5"></i>

              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Assets Management</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatibus natus ut assumenda quibusdam adipisci ad dolorem dolores obcaecati corporis.</p>
              </div>
            </div>
          </div>
          <div>
            <div data-aos="zoom-in" className="card shadow-xl bg-blue-400">
            <i class="fa-solid fa-money-bill-trend-up text-blue-600 ml-6 text-5xl text-center mt-5"></i>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Banking and Capital Markets</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint beatae dignissimos iure tempora dicta dolores? A quick brown fox jumps over the lazy dog.</p>
              </div>
            </div>
          </div>
          <div>
            <div data-aos="zoom-in" className="card shadow-xl bg-blue-400">
            <i class="fa-solid fa-charging-station text-blue-600 ml-6 text-5xl text-center mt-5"></i>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Energy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae amet porro error perspiciatis fugit corporis inventore est architecto reiciendis quam?</p>
              </div>
            </div>
          </div>
          <div>
            <div data-aos="zoom-in" className="card shadow-xl bg-blue-400">
            <i class="fa-solid fa-house-flag text-blue-600 ml-6 text-5xl text-center mt-5"></i>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Government</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis cumque corrupti dignissimos placeat! Illum quas maxime natus quaerat vitae!</p>
              </div>
            </div>
          </div>
          <div>
            <div data-aos="zoom-in" className="card shadow-xl bg-blue-400">
            <i class="fa-solid fa-dna text-blue-600 ml-6 text-5xl text-center mt-5"></i>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Life Science</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos distinctio officiis quaerat laborum reiciendis deserunt totam eius recusandae incidunt ipsum?</p>
              </div>
            </div>
          </div>
          <div>
            <div data-aos="zoom-in" className="card shadow-xl bg-blue-400">
            <i class="fa-solid fa-hands-holding-child text-blue-600 ml-6 text-5xl text-center mt-5"></i>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">Insurance</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora molestias laboriosam explicabo nihil beatae? Exercitationem, animi! In consectetur quisquam culpa.</p>
              </div>
            </div>
          </div>
        </div>
          <div className="w- full text-center my-5">
            <button className="btn btn-outline btn-wide btn-success">More Industries</button>
          </div>
        
      </div>
  );
};

export default Industries;
