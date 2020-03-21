import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import BottomMenu from "./BottomMenu";
import { Header } from "../components/Utils/Header";
import pages from "./pages";

export default function NavigationContainer() {
  return (
    <Router>
      <Header />
      <Container fixed>
        <Switch>
          {pages.map(({ path, component }) => (
            <Route path={path} component={component} key={path} />
          ))}
        </Switch>
      </Container>
      <BottomMenu />
    </Router>
  );
}
