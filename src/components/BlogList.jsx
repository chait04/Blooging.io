import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blogList">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blogPreview" key={blog.id}>
          {/* <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
          </Link>
          <Link>
            <p>{ blog.body.slice(0, 100) }... <span style={{
              color: "red"
            }}>Read More</span></p>
          </Link> */}
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
          <Link to={`/blogs/${blog.id}`}>
            <p style={{
              marginTop: "4px",
            }}>{ blog.body.slice(0, 100) }... <span style={{
              color: "red",
              textDecoration: "underline"
            }}>Read More</span></p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
