import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import PostListPage from "../components/PostListPage";
import AddPostPage from "../components/AddPostPage";
import EditPostPage from "../components/EditPostPage";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/create" component={AddPostPage} />
          <Route path="/edit/:id" component={EditPostPage} />
          <Route path="/" component={PostListPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
