import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PostListItem from "./PostListItem/PostListItem";

class PostList extends Component {
  state = { search: "", sortBy: "By Title" };

  searchInputHandler = e => {
    this.setState({ search: e.target.value });
  };

  changeSelect = e => {
    const sortBy = this.state.sortBy === "By Body" ? "By Title" : "By Body";
    this.setState({ sortBy });
  };

  render() {
    return (
      <div style={{ width: "80%", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "35rem"
            }}
          >
            <input
              value={this.state.search}
              onChange={this.searchInputHandler}
              type="text"
              placeholder="Search Posts"
              className="post-search"
            />
            <select
              onChange={this.changeSelect}
              value={this.state.sortBy}
              className="post-select"
            >
              <option value="By Title">By Title</option>
              <option value="By Body">By Body</option>
            </select>
          </div>
          <Link className="post-add" to="/create">
            Add a Post
          </Link>
        </div>

        <ul className="post-list">
          {this.props.state
            .filter(post => {
              const type = this.state.sortBy === "By Title" ? "title" : "body";

              return post[type]
                .toLowerCase()
                .includes(this.state.search.toLowerCase());
            })
            .map(post => (
              <PostListItem
                id={post.id}
                item={this.state.sortBy === "By Title" ? post.title : post.body}
                key={post.id}
              />
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(PostList);
