import React from "react";
import { connect } from "react-redux";

const CurrentPostPage = props => {
  const {
    state: posts,
    match: {
      params: { id }
    }
  } = props;
  // const posts = props.state;
  // const id = props.match.params.id;
  const currentPost = posts.find(post => post.id === id);
  let post;
  if (!currentPost) {
    post = <p className="is-size-4 has-text-centered">Not a valid post...</p>;
  } else {
    post = (
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          maxWidth: "600px"
        }}
      >
        <h1
          style={{ wordBreak: "break-all" }}
          className="title is-1 has-text-centered"
        >
          {currentPost.title}
        </h1>
        <p style={{ wordBreak: "break-all" }} className="is-size-4">
          {currentPost.body}
        </p>
      </div>
    );
  }

  return post;
};

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(CurrentPostPage);
