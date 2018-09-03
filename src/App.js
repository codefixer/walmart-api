import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Search from "./components/Search";
import Stores from "./components/Stores";
import Error from "./components/Error";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search" component={Search} exact />
          <Route path="/stores" component={Stores} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
