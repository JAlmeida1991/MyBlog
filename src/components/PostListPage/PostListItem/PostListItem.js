import React from "react";
import { Link } from "react-router-dom";

const PostTitleListItem = props => (
  <Link to={`/edit/${props.id}`}>
    <li
      style={{
        padding: "5px",
        border: "1px solid black",
        marginBottom: "5px",
        wordBreak: "break-all"
      }}
    >
      {props.item}
    </li>
  </Link>
);

export default PostTitleListItem;
