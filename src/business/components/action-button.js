import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const ActionButton = ({ children, ...rest }) => {
  return (
    <StyledButton color="primary" variant="contained" size="large" {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  margin: 5px;
`;

export default ActionButton;
