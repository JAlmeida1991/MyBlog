import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PostList from "../components/PostList";
import AddPost from "../components/AddPost";
import EditPost from "../components/EditPost";

class App extends Component {
  render() {
    return (
      <div>
        <h1>MyBlog</h1>
        <Switch>
          <Route path="/create" component={AddPost} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/" component={PostList} />
        </Switch>
      </div>
    );
  }
}

export default App;
