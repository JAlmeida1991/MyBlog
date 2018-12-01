import React from "react";
import { Link } from "react-router-dom";

const PostTitleListItem = props => (
  <Link to={`/edit/${props.id}`}>
    <li>{props.title}</li>
  </Link>
);

export default PostTitleListItem;
