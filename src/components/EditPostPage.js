import React, { Component } from "react";
import { connect } from "react-redux";

import BlogForm from "./BlogForm";
import { removePost, editPost } from "../store/actions/actionCreators";

class AddPost extends Component {
  state = {
    title: "",
    body: ""
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

  titleInputHandler = e => {
    this.setState({ title: e.target.value });
  };

  bodyInputHandler = e => {
    this.setState({ body: e.target.value });
  };

  editPostHandler = () => {
    const id = this.props.match.params.id;
    const oldPost = this.props.state.find(post => post.id === id);
    const currentPost = { ...this.state, id };
    this.props.editPost(oldPost, currentPost);
    this.props.history.push("/");
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

    return post;
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
