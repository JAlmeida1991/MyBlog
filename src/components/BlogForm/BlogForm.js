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
    <label style={{ fontWeight: "600", fontSize: "20px" }} htmlFor="title">
      Title
    </label>
    <input
      id="title"
      name="title"
      type="input"
      value={props.title}
      onChange={props.titleInputHandler}
      style={{
        padding: "5px",
        margin: "5px 0 5px 0",
        fontSize: "16px"
      }}
      placeholder="Post Title"
    />
    <label style={{ fontWeight: "600", fontSize: "20px" }} htmlFor="body">
      Body
    </label>
    <textarea
      style={{
        height: "300px",
        padding: "5px",
        margin: "5px 0 5px 0",
        fontSize: "16px"
      }}
      id="body"
      name="body"
      value={props.body}
      onChange={props.bodyInputHandler}
      placeholder="Post Body"
    />
    {props.submit && (
      <button type="button" onClick={props.submitHandler}>
        Save Post
      </button>
    )}
    {props.cancel && (
      <button type="button" onClick={props.cancelHandler}>
        Cancel
      </button>
    )}

    {props.edit && (
      <button type="button" onClick={props.editPostHandler}>
        Save Post
      </button>
    )}
    {props.remove && (
      <button type="button" onClick={props.postRemoveHandler}>
        Remove Post
      </button>
    )}
  </form>
);

export default BlogForm;
