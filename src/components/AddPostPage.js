import React, { Component } from "react";
import { connect } from "react-redux";

import { addPost } from "../store/actions/actionCreators";
import BlogForm from "./BlogForm";

import guid from "../utils/guid";

class AddPost extends Component {
  state = {
    title: "",
    body: ""
  };

  titleInputHandler = e => {
    this.setState({ title: e.target.value });
  };

  bodyInputHandler = e => {
    this.setState({ body: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const newPost = { ...this.state, id: guid() };
    this.props.addPost(newPost);
    this.props.history.replace("/");
  };

  render() {
    return (
      <BlogForm
        title={this.state.title}
        body={this.state.body}
        titleInputHandler={this.titleInputHandler}
        bodyInputHandler={this.bodyInputHandler}
        submit
        submitHandler={this.submitHandler}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post))
});

export default connect(
  null,
  mapDispatchToProps
)(AddPost);
