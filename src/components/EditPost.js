import React, { Component } from "react";
import { connect } from "react-redux";

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

  changeTitleHandler = e => {
    this.setState({ title: e.target.value });
  };

  changeBodyHandler = e => {
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
        <div>
          <form onSubmit={e => e.preventDefault()}>
            <input
              onChange={this.changeTitleHandler}
              value={this.state.title}
            />
            <textarea
              onChange={this.changeBodyHandler}
              value={this.state.body}
            />
            <button onClick={this.editPostHandler}>Save Post</button>
            <button onClick={this.postRemoveHandler}>Remove Post</button>
          </form>
        </div>
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
