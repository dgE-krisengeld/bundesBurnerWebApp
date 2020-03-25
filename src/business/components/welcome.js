import React from "react";
import logo from "../../assets/dgE_v4.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageContainer from "./page-container";
import ActionButton from "./action-button";

export const Welcome = () => {
  return (
    <PageContainer>
      <h1>dg€-App für Geschäfte</h1>
      <p>
        Besitzen Sie ein lokales Geschäft, das durch die Corona-Krise finanziell
        gefährdet ist?
      </p>
      <p>
        Nutzen Sie <b>dg€</b> (sprich: "diggi") als Zahlungsmöglichkeit für Ihr
        Geschäft und profitieren Sie von zielgerichteter Wirtschaftsförderung!
      </p>
      <Logo src={logo} alt="dgE Logo" />
      <p>
        <ActionButton component={Link} to="/business/register">
          Diggi, los geht's!
        </ActionButton>
      </p>
    </PageContainer>
  );
};

const Logo = styled.img`
  width: 300px;
  max-width: 100%;
  margin: 10px;
`;
