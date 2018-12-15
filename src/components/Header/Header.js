import React from "react";
import { Link } from "react-router-dom";

const Header = props => (
  <header className="header">
    <h1 className="header__title">
      <Link className="header__title--link" to="/">
        MyBlogger
      </Link>
    </h1>
  </header>
);

export default Header;
