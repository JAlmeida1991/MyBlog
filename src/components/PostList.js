import React from "react";
import { Link } from "react-router-dom";

const PostList = props => (
  <div>
    <input placeholder="Search Posts" />
    <Link to="/create">Add a Post</Link>
    <ul>
      <li />
    </ul>
  </div>
);

export default PostList;
