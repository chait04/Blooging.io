import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, settitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Chaitanya");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  let handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setLoading(true);

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    };
    fetch(`http://localhost:8000/blogs`, options).then(() => {
      console.log(`New Blog Added`);
      setLoading(false);
      history.push('./')
    });

  };

  return (
    <div className="create">
      <h2> Add new Blog</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          required
        />
        <label htmlFor="">Blog Body</label>
        <textarea
          required
          name=""
          id=""
          cols="30"
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">Blog author</label>
        <select
          value={author}
          name=""
          id=""
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="chaitanya">Chaitanya</option>
          <option value="kaju">kaju</option>
        </select>
        {!loading && <button>Add Blog</button>}
        {loading && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
