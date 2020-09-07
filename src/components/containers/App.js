import React, { Fragment } from "react";
import WbnPlayer from "./WbnPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
  <BrowserRouter basename="react_videoplayer/">
    <Fragment>
      <Switch>
        <Route exact path="/" component={WbnPlayer} />
        <Route exact path="/:activeVideo" component={WbnPlayer} />
      </Switch>
      <GlobalStyle />
    </Fragment>
  </BrowserRouter>
);

export default App;
