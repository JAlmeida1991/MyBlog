import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { removePost, editPost } from "../../store/actions/actionCreators";

import BlogForm from "../BlogForm/BlogForm";
import ErrorMessage from "../BlogForm/ErrorMessage/ErrorMessage";

class AddPost extends Component {
  state = {
    title: "",
    body: "",
    hasError: "",
    // Only needed to cancel subscription to window timeout function
    windowTimeout: null
  };

  componentDidMount() {
    const currentPost = this.props.state.find(
      post => post.id === this.props.match.params.id
    );
    if (currentPost) {
      const { title, body } = currentPost;
      this.setState({ title, body });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hasError !== this.state.hasError && this.state.hasError) {
      const windowTimeout = window.setTimeout(() => {
        this.setState({ hasError: "" });
      }, 2000);
      // Assign id to state
      this.setState({ windowTimeout });
    }
  }

  titleInputHandler = e => {
    this.setState({ title: e.target.value, hasError: "" });
  };

  bodyInputHandler = e => {
    this.setState({ body: e.target.value, hasError: "" });
  };

  editPostHandler = () => {
    const { title, body } = this.state;
    if (title.trim() && body.trim()) {
      const id = this.props.match.params.id;
      const oldPost = this.props.state.find(post => post.id === id);
      const currentPost = { title, body, id };
      this.props.editPost(oldPost, currentPost);
      this.props.history.push("/");
    } else if (title && !body) {
      this.setState({ hasError: "Please enter a Body!" });
    } else if (!title && body) {
      this.setState({ hasError: "Please enter a Title!" });
    } else {
      this.setState({ hasError: "Please enter both Title and Body!" });
    }
  };

  postRemoveHandler = () => {
    // clear the timeOut
    window.clearTimeout(this.state.windowTimeout);

    const id = this.props.match.params.id;
    this.props.removePost({ ...this.state, id });
    this.props.history.push("/");
  };

  render() {
    const validPost = this.props.state.find(
      post => post.id === this.props.match.params.id
    );

    let post;

    if (validPost) {
      post = (
        <Fragment>
          <BlogForm
            title={this.state.title}
            body={this.state.body}
            titleInputHandler={this.titleInputHandler}
            bodyInputHandler={this.bodyInputHandler}
            edit
            editPostHandler={this.editPostHandler}
            remove
            postRemoveHandler={this.postRemoveHandler}
          />
          <Link
            style={{ marginBottom: "1rem" }}
            className="is-size-5"
            to={`/post/${this.props.match.params.id}`}
          >
            Link to Post
          </Link>
          {this.state.hasError && (
            <ErrorMessage message={this.state.hasError} />
          )}
        </Fragment>
      );
    } else {
      post = (
        <div className="has-text-centered is-size-4">Not a valid post...</div>
      );
    }

    return <div className="form-container">{post}</div>;
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  removePost: post => dispatch(removePost(post)),
  editPost: (post, updates) => dispatch(editPost(post, updates))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost);
