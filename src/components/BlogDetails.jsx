import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    loading,
  } = useFetch(`http://localhost:8000/blogs/` + id);
  const history = useHistory();

  let handleDelete = () => {
    let options = {
      method: "DELETE",
    };
    fetch(`http://localhost:8000/blogs/` + blog.id, options)
    .then(() => {
      console.log(`Blog deleted`);
      history.push("/");
    });
  };

  return (
    <div className="blogDetails">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && <h2>Something: - {id}</h2>}
      {blog && <p> {blog.body}</p>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BlogDetails;
