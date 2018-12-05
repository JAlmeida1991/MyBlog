import React from "react";
import { Link } from "react-router-dom";

const PostTitleListItem = props => (
  <Link className="post-list__item--link" to={`/edit/${props.id}`}>
    <li className="post-list__item">{props.item}</li>
  </Link>
);

export default PostTitleListItem;
