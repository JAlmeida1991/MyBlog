import React, { Component } from "react";
import { connect } from "react-redux";

import { addPost } from "../../store/actions/actionCreators";
import guid from "../../utils/guid";

import BlogForm from "../BlogForm/BlogForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class AddPost extends Component {
  state = {
    title: "",
    body: "",
    hasError: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hasError !== this.state.hasError && this.state.hasError) {
      window.setTimeout(() => {
        this.setState({ hasError: false });
      }, 2000);
    }
  }

  titleInputHandler = e => {
    this.setState({ title: e.target.value, hasError: false });
  };

  bodyInputHandler = e => {
    this.setState({ body: e.target.value, hasError: false });
  };

  submitHandler = e => {
    e.preventDefault();
    const { title, body } = this.state;
    if (title.trim() && body.trim()) {
      const newPost = { title, body, id: guid() };
      this.props.addPost(newPost);
      this.props.history.replace("/");
    } else {
      this.setState({ hasError: true });
    }
  };

  cancelHandler = e => {
    const {
      history: { goBack }
    } = this.props;
    goBack();
  };

  render() {
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
        <BlogForm
          title={this.state.title}
          body={this.state.body}
          titleInputHandler={this.titleInputHandler}
          bodyInputHandler={this.bodyInputHandler}
          submit
          submitHandler={this.submitHandler}
          cancel
          cancelHandler={this.cancelHandler}
        />
        {this.state.hasError && <ErrorMessage />}
      </div>
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
