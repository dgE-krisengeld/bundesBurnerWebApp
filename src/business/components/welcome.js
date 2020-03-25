import React from "react";
import logo from "../../assets/dgE_v4.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageContainer from "./page-container";
import ActionButton from "./action-button";

export const Welcome = () => {
  return (
    <PageContainer>
      <h1>Willkommen</h1>
      <p>dgE (sprich: diggi) - App für Geschäfte</p>
      <Logo src={logo} alt="dgE Logo" />
      <p>
        <ActionButton component={Link} to="/business/register">
          Jetzt registrieren
        </ActionButton>
      </p>
    </PageContainer>
  );
};

const Logo = styled.img`
  width: 400px;
  max-width: 100%;
`;
