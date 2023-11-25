// import React from 'react';
import { NavLink } from "react-bootstrap";
import "./Blog.css";
import { Link } from "react-router-dom";
import blog1 from "../../assets/images/blog/1.jpeg";
import blog2 from "../../assets/images/blog/3.jpeg";

const Blog = () => {
  return (
    <div className="container blog d-flex justify-content-between gap-3">
    <div className="left bg-primary w-75">1</div>
    <div className="right bg-info w-25"><div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  
  
</div></div>
      </div>
  );
};

export default Blog;
