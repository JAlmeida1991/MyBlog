import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import PostListPage from "../components/PostListPage";
import AddPostPage from "../components/AddPostPage";
import EditPostPage from "../components/EditPostPage";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="body">
          <Switch>
            <Route path="/create" component={AddPostPage} />
            <Route path="/edit/:id" component={EditPostPage} />
            <Route path="/" component={PostListPage} />
          </Switch>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
