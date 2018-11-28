import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const PostList = props => (
  <div>
    <input placeholder="Search Posts" />
    <Link to="/create">Add a Post</Link>
    <ul>
      <li />
    </ul>
  </div>
);

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(PostList);
