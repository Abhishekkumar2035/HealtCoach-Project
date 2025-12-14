import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-entry align-self-stretch">
      <Link
        to={`/blog/${post.id}`}
        className="block-20 rounded img-2"
        style={{ backgroundImage: `url('images/${post.image}')` }}
      ></Link>
      <div className="text mt-3">
        <div className="meta mb-2">
          <div>
            <a href="#">{post.date}</a>
          </div>
          <div>
            <a href="#">{post.author}</a>
          </div>
          <div>
            <a href="#" className="meta-chat">
              <span className="fa fa-comment"></span> {post.comments}
            </a>
          </div>
        </div>
        <h3 className="heading">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <p>
          <Link to={`/blog/${post.id}`} className="btn btn-primary">
            Read more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
