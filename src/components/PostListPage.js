import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class PostList extends Component {
  state = { search: "" };

  searchInputHandler = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.search}
          onChange={this.searchInputHandler}
          type="text"
          placeholder="Search Posts"
        />
        <Link to="/create">Add a Post</Link>
        <ul>
          {this.props.state
            .filter(post =>
              post.title.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map(post => (
              <Link key={post.id} to={`/edit/${post.id}`}>
                <li>{post.title}</li>
              </Link>
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
