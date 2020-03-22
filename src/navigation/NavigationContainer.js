import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import BottomMenu from "./BottomMenu";
import { Header } from "../components/Utils/Header";
import pages from "./pages";
import styled from "styled-components";

export default function NavigationContainer() {
  return (
    <Router>
      <Header />
      <ContentContainer>
        <Switch>
          {pages.map(({ path, component }) => (
            <Route path={path} component={component} key={path} />
          ))}
        </Switch>
      </ContentContainer>
      <BottomMenu />
    </Router>
  );
}

const ContentContainer = styled(Container)`
  display: flex !important;
  flex-direction: column;
  flex-grow: 1;
`;
