// import React from 'react';
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog-area">
      <div className="container">
        <div className="row">
          <div className="blog-header text-center">
            <h5>LATEST NEWS</h5>
            <h4>Stay Up-to-Date</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="single-blog">
              <div className="blog-overlay text-center">
                <i class="fa-solid fa-link"></i>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus accusamus.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-blog">
              <div className="blog-overlay text-center">
                <i class="fa-solid fa-link"></i>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus accusamus.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-blog">
              <div className="blog-overlay text-center">
                <i class="fa-solid fa-link"></i>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus accusamus.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
