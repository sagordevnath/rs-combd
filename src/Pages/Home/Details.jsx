import React from "react";

const Details = () => {
  return (
    <div className="grid grid-cols-2 gap-1 py-10">
      <div className="card h-80 text-primary-content rounded-none bg-blue-400">
        <div className="card-body">
          <h2 className="card-title text-4xl mt-14">Stay up to date with what matters to you</h2>
          <p className="my-5">Gain access to personalized content based on your interests by signing up today</p>
          <div className="card-actions justify-end">
          <button className="btn btn-outline btn-success">Sign up today</button>
          </div>
        </div>
      </div>
      <div className="card h-80 text-primary-content rounded-none bg-blue-400">
        <div className="card-body">
          <h2 className="card-title text-4xl mt-14">RS Communications Insights</h2>
          <p className="my-5">Welcome to the RS Communication knowledge base of research.</p>
          <div className="card-actions justify-end">
          <button className="btn btn-outline btn-success">Discover our thoughts leadership</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
