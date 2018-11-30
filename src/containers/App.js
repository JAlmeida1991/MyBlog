import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PostListPage from "../components/PostListPage";
import AddPostPage from "../components/AddPostPage";
import EditPostPage from "../components/EditPostPage";

class App extends Component {
  render() {
    return (
      <div>
        <h1>MyBlog</h1>
        <Switch>
          <Route path="/create" component={AddPostPage} />
          <Route path="/edit/:id" component={EditPostPage} />
          <Route path="/" component={PostListPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
