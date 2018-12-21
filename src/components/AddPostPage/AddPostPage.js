import React, { Component } from "react";
import { connect } from "react-redux";

import { addPost } from "../../store/actions/actionCreators";
import guid from "../../utils/guid";

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

  submitHandler = e => {
    e.preventDefault();
    const { title, body } = this.state;
    if (title.trim() && body.trim()) {
      const newPost = { title, body, id: guid() };
      this.props.addPost(newPost);
      this.props.history.replace("/");
    } else if (title && !body) {
      this.setState({ hasError: "Please enter a Body!" });
    } else if (!title && body) {
      this.setState({ hasError: "Please enter a Title!" });
    } else {
      this.setState({ hasError: "Please enter both Title and Body!" });
    }
  };

  cancelHandler = e => {
    // Clear the timeout
    window.clearTimeout(this.state.windowTimeout);

    const {
      history: { goBack }
    } = this.props;

    goBack();
  };

  render() {
    return (
      <div className="form-container">
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
        {this.state.hasError && <ErrorMessage message={this.state.hasError} />}
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
