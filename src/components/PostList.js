import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import guid from "../utils/guid";

const PostList = props => (
  <div>
    <input placeholder="Search Posts" />
    <Link to="/create">Add a Post</Link>
    <ul>
      {props.state.map(post => (
        <Link key={guid()} to={`/edit/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(PostList);
