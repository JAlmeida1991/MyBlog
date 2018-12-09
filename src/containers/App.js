import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/Header/Header";
import PostListPage from "../components/PostListPage/PostListPage";
import AddPostPage from "../components/AddPostPage/AddPostPage";
import EditPostPage from "../components/EditPostPage/EditPostPage";
import CurrentPostPage from "../components/CurrentPostPage/CurrentPostPage";
import Footer from "../components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="body">
          <Switch>
            <Route path="/create" component={AddPostPage} />
            <Route path="/edit/:id" component={EditPostPage} />
            <Route path="/:id" component={CurrentPostPage} />
            <Route path="/" component={PostListPage} />
          </Switch>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
