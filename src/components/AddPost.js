import React, { Component } from "react";
import { connect } from "react-redux";

import { addPost } from "../store/actions/actionCreators";
import guid from "../utils/guid";

class AddPost extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidUpdate() {
    console.log(this.props);
  }

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
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            name="title"
            type="input"
            value={this.state.title}
            onChange={this.titleInputHandler}
          />
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.bodyInputHandler}
          />
          <button type="submit">Save Post</button>
        </form>
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
