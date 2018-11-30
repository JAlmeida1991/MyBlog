import React from "react";

const BlogForm = props => (
  <form
    style={{
      display: "flex",
      flexDirection: "column",
      width: "80%",
      maxWidth: "600px",
      margin: "0 auto"
    }}
    onSubmit={e => e.preventDefault()}
  >
    <label htmlFor="title">Title</label>
    <input
      id="title"
      name="title"
      type="input"
      value={props.title}
      onChange={props.titleInputHandler}
      style={{
        padding: "5px"
      }}
    />
    <label htmlFor="body">Body</label>
    <textarea
      style={{
        height: "300px",
        padding: "5px"
      }}
      id="body"
      name="body"
      value={props.body}
      onChange={props.bodyInputHandler}
    />
    {props.submit && (
      <button type="submit" onClick={props.submitHandler}>
        Add Post
      </button>
    )}
    {props.edit && (
      <button type="submit" onClick={props.editPostHandler}>
        Save Post
      </button>
    )}
    {props.remove && (
      <button type="submit" onClick={props.postRemoveHandler}>
        Remove Post
      </button>
    )}
  </form>
);

export default BlogForm;
