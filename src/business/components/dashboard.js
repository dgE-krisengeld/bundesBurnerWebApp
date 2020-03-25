import React from "react";
import logo from "../../assets/dgE_v4.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageContainer from "./page-container";
import ActionButton from "./action-button";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon
} from "@material-ui/core";
import { AppBarSpacer } from "./app-bar-spacer";

export const Dashboard = () => {
  return (
    <PageContainer>
      <AppBar>
        <Toolbar>
          <MobileHidden>
            <Typography variant="h6">dg€ for Business</Typography>
          </MobileHidden>
          <FillSpaceMobileHidden />
          <Typography variant="h6">20 dg€ </Typography>

          <FillSpace />
          <Typography variant="h7">Best Worscht in Town</Typography>
          <IconButton color="inherit">
            <Icon>fastfood</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppBarSpacer />
      <h1>dg€-App für Geschäfte</h1>
      <Logo src={logo} alt="dgE Logo" />
      <p>
        <ActionButton component={Link} to="/business/receive">
          Zahlung empfangen
        </ActionButton>
      </p>
      <p>
        <ActionButton component={Link} to="/business/payback" color="secondary">
          Rückzahlung
        </ActionButton>
      </p>
    </PageContainer>
  );
};

const MobileHidden = styled.div`
  display: none;
  @media (min-width: 750px) {
    display: block;
  }
`;

const FillSpace = styled.div`
  flex-grow: 1;
`;

const FillSpaceMobileHidden = styled.div`
  flex-grow: 1;
  display: none;
  @media (min-width: 750px) {
    display: block;
  }
`;

const Logo = styled.img`
  width: 200px;
  max-width: 100%;
`;
