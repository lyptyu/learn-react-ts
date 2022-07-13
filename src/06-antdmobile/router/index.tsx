import React, {Component} from 'react';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Film from "../views/Film";
import Cinema from "../views/Cinema";
import Center from "../views/Center";
import Detail from "../views/Detail";
class Index extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/film" component={Film} />
          <Route path="/cinema" component={Cinema} />
          <Route path="/center" component={Center} />
          <Route path={"/detail/:myid"} component={Detail} />
          <Redirect from={'/'} to={'/film'} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Index;
