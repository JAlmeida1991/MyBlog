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
        <div className="filter-group-container">
          <div className="filter-group">
            <input
              name="post-search"
              type="text"
              placeholder="Search Posts"
              className="input is-large"
              disabled={!this.props.state.length}
              value={this.state.search}
              onChange={this.searchInputHandler}
              style={{ marginRight: ".8rem" }}
            />
            <div className="select is-large">
              <select
                name="post-select"
                disabled={!this.props.state.length}
                onChange={this.changeSelect}
                value={this.state.sortBy}
              >
                <option value="By Title">By Title</option>
                <option value="By Body">By Body</option>
              </select>
            </div>
          </div>
          <Link className="button is-success is-large" to="/create">
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
        {!this.props.state.length && (
          <div className="no-post-container">
            <p className="is-size-4 is-italic">No posts as of yet!</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(PostList);
