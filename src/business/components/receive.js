import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import PageContainer from "./page-container";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon,
  TextField,
  InputAdornment
} from "@material-ui/core";

import qrcode from "../../assets/qrcode.png";
import { AppBarSpacer } from "./app-bar-spacer";

export const Receive = () => {
  const { goBack } = useHistory();
  return (
    <PageContainer>
      <AppBar>
        <Toolbar>
          <FillSpace>
            <IconButton onClick={goBack} color="inherit">
              <Icon>navigate_before</Icon>
            </IconButton>
          </FillSpace>
          <Typography variant="h6">Zahlung Empfangen</Typography>
          <FillSpace />
        </Toolbar>
      </AppBar>
      <AppBarSpacer />
      <p></p>
      <Form>
        <TextField
          id="receive-amount"
          type="number"
          label="Betrag"
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="end">dg€</InputAdornment>
          }}
        />
      </Form>
      <Fill />
      <QrCode src={qrcode} />
      <Fill />
      <BottomSpace />
    </PageContainer>
  );
};

const FillSpace = styled.div`
  flex-grow: 1;
  flex-basis: 1px;
  text-align: left;
`;

const Form = styled.form`
  width: 100%;
`;

const QrCode = styled.img`
  width: 400px;
  max-width: 100%;
  margin: 20px 0;
`;

const Fill = styled.div`
  flex-grow: 1;
`;

const BottomSpace = styled.div`
  height: 56px;
`;
