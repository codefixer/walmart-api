import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from "./components/Products";
import Stores from "./components/Stores";
import Error from "./components/Error";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Products} exact />
          <Route path="/stores" component={Stores} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
