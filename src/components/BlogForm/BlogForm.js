import React from "react";

const BlogForm = props => (
  <form onSubmit={e => e.preventDefault()}>
    <label style={{ fontWeight: "600", fontSize: "20px" }} htmlFor="title">
      Title
    </label>
    <input
      id="title"
      name="title"
      type="input"
      value={props.title}
      onChange={props.titleInputHandler}
      className="input is-large"
      placeholder="Post Title"
    />
    <label style={{ fontWeight: "600", fontSize: "20px" }} htmlFor="body">
      Body
    </label>
    <textarea
      className="textarea is-large"
      rows="13"
      style={{ marginBottom: "1.5rem" }}
      id="body"
      name="body"
      value={props.body}
      onChange={props.bodyInputHandler}
      placeholder="Post Body"
    />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem"
      }}
    >
      {props.submit && (
        <button
          className="button is-success is-large"
          type="button"
          onClick={props.submitHandler}
        >
          Save
        </button>
      )}
      {props.cancel && (
        <button
          className="button is-danger is-large"
          type="button"
          onClick={props.cancelHandler}
        >
          Cancel
        </button>
      )}

      {props.edit && (
        <button
          className="button is-success is-large"
          type="button"
          onClick={props.editPostHandler}
        >
          Save
        </button>
      )}
      {props.remove && (
        <button
          className="button is-danger is-large"
          type="button"
          onClick={props.postRemoveHandler}
        >
          Remove
        </button>
      )}
    </div>
  </form>
);

export default BlogForm;
