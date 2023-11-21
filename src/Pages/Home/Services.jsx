import React from "react";
import image1 from '../../Assets/images/blog/1.jpeg';
import image2 from '../../Assets/images/blog/2.png';
import image3 from '../../Assets/images/blog/3.jpeg';
import image4 from '../../Assets/images/blog/4.jpeg';

const Services = () => {
  return (
    <div className="h-screen px-5">
      <h1 className="text-5xl text-center mb-5 mt-5">Services</h1>
      <div className="grid grid-cols-4 gap-4 py-10 text-black">
        <div data-aos="zoom-out" className="card shadow-xl h-96 bg-blue-400">
          <figure className="px-10 pt-10">
            <img
              src={image1}
              alt="Shoes"
              className="rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Audit and Assurance</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quia. Mollitia nam qui voluptatum voluptatem. Soluta harum aliquam eligendi est.</p>
          </div>
        </div>
        <div data-aos="zoom-out" className="card shadow-xl h-96 bg-blue-400">
          <figure className="px-10 pt-10">
            <img
              src={image2}
              alt="Shoes"
              className="rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Tax & Legal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quia. Mollitia nam qui voluptatum voluptatem. Soluta harum aliquam eligendi est.</p>
          </div>
        </div>
        <div data-aos="zoom-out" className="card shadow-xl h-96 bg-blue-400">
          <figure className="px-10 pt-10">
            <img
              src={image3}
              alt="Shoes"
              className="rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Advisory</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quia. Mollitia nam qui voluptatum voluptatem. Soluta harum aliquam eligendi est.</p>
          </div>
        </div>
        <div data-aos="zoom-out" className="card shadow-xl h-96 bg-blue-400">
          <figure className="px-10 pt-10">
            <img
              src={image4}
              alt="Shoes"
              className="rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Private Enterprise</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quia. Mollitia nam qui voluptatum voluptatem. Soluta harum aliquam eligendi est.</p>
          </div>
        </div>
      </div>
      <div className="w- full text-center my-5">
            <button className="btn btn-outline btn-wide btn-success">All Services</button>
          </div>
    </div>
  );
};

export default Services;
