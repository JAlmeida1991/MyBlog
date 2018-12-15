import React from "react";

const BlogForm = props => (
  <form>
    <label className="is-size-3 has-text-weight-semibold" htmlFor="title">
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
    <label className="is-size-3 has-text-weight-semibold" htmlFor="body">
      Body
    </label>
    <textarea
      className="textarea is-large"
      rows="13"
      style={{ marginBottom: "1rem" }}
      id="body"
      name="body"
      value={props.body}
      onChange={props.bodyInputHandler}
      placeholder="Post Body"
    />
    <div className="form-button-container">
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
