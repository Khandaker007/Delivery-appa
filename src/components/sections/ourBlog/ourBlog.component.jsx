import React from "react";

// COMPONENTS
import BlogCardOpen from "../../shared/BlogCardOpen/BlogCardOpen.component";
import BlogCardClose from "../../shared/BlogCardClose/BlogCardClose.component";

// CSS
import "./ourBlog.style.scss";

function OurBlog(props) {
  return (
    <div className="our-blog">
      <div className="heading-container">
        <h2>Our Blog | Recents</h2>
      </div>
      <hr />
      <div className="card-container">
        <div className="card-container__open">
          <BlogCardOpen />
        </div>
        <div className="card-container__close">
          <BlogCardClose />
          <BlogCardClose />
          <BlogCardClose />
        </div>
      </div>
    </div>
  );
}

export default OurBlog;
