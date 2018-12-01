import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PostTitleListItem from "./PostTitleListItem";

class PostList extends Component {
  state = { search: "" };

  searchInputHandler = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div style={{ width: "80%", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "50%"
            }}
          >
            <input
              style={{ padding: "5px", width: "30%", flex: "1" }}
              value={this.state.search}
              onChange={this.searchInputHandler}
              type="text"
              placeholder="Search Posts"
            />
            <select style={{ height: "100%" }}>
              <option>By Title</option>
              <option>By Body</option>
            </select>
          </div>
          <Link
            style={{
              padding: "5px",
              backgroundColor: "green",
              color: "white",
              display: "inline-block",
              textDecoration: "none"
            }}
            to="/create"
          >
            Add a Post
          </Link>
        </div>

        <ul style={{ listStyle: "none" }}>
          {this.props.state
            .filter(post =>
              post.title.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map(post => (
              <PostTitleListItem
                id={post.id}
                title={post.title}
                key={post.id}
              />
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(PostList);
