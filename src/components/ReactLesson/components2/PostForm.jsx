import React, { useState } from "react";

function PostForm(props) {
  const [title, setTitle] = useState("");
  const [stack, setStack] = useState("");

  props.getPostFormTitle(title);

  const addPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      name: title,
      stack: stack,
    };

    props.handlePost(newPost);
    setTitle("");
    setStack("");

    // props.setModal(false);
  };
  return (
    <>
      <form>
        <h5 className="text-center">Create your first post</h5>
        <input
          type="text"
          placeholder="Programming language"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your favourite stack"
          className="form-control my-3"
          value={stack}
          onChange={(e) => setStack(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={addPost}>
          Add post
        </button>
      </form>
    </>
  );
}

export default PostForm;
