import React, { Component } from "react";
import { connect } from "react-redux";

import { removePost, editPost } from "../../store/actions/actionCreators";

import BlogForm from "../BlogForm/BlogForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class AddPost extends Component {
  state = {
    title: "",
    body: "",
    hasError: ""
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
      window.setTimeout(() => {
        this.setState({ hasError: "" });
      }, 2000);
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
      );
    } else {
      post = <div>Not a valid post...</div>;
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          maxWidth: "600px",
          margin: "0 auto"
        }}
      >
        {post}
        {this.state.hasError && <ErrorMessage message={this.state.hasError} />}
      </div>
    );
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
