import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { HomeContainer } from "../containers/Home/Home";
import { BusinessesContainer } from "../containers/Businesses/Businesses";
import { HelpContainer } from "../containers/Help/Help";
import { QrCodeContainer } from "../containers/Home/QrCode";
import { MyQrCodeContainer } from "../containers/Home/MyQrCode";
import BottomMenu from "./BottomMenu";
import {Header} from "../components/Utils/Header";

export default function NavigationContainer() {
  return (
    <Router>
      <Header />
      <Container fixed>
        <Switch>
          <Route path="/businesses">
            <BusinessesContainer />
          </Route>
          <Route path="/help">
            <HelpContainer />
          </Route>

          <Route path="/scanQR">
            <QrCodeContainer />
          </Route>

          <Route path="/myQrCode">
            <MyQrCodeContainer />
          </Route>

          <Route path="/">
            <HomeContainer />
          </Route>
        </Switch>

      </Container>
      <BottomMenu />
    </Router>
  );
}
