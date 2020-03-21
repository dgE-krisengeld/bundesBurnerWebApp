import React from "react";
import {
  Box,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  IconButton
} from "@material-ui/core";
import { getBusinessById } from "../../services/business.service";
import styled from "styled-components";
import { useRouteMatch, useHistory } from "react-router-dom";

const BusinessComponent = () => {
  const {
    params: { id }
  } = useRouteMatch();
  const { goBack } = useHistory();
  const business = getBusinessById(id);
  return (
    <>
      <FlexBox>
        <SpaceContainer>
          <IconButton onClick={goBack} color="inherit">
            <Icon>navigate_before</Icon>
          </IconButton>
        </SpaceContainer>
        <h1>
          {business ? (
            <>
              <Icon>{business.icon}</Icon> {business.title}
            </>
          ) : (
            "Nicht gefunden"
          )}
        </h1>
        <SpaceContainer />
      </FlexBox>
      {business ? (
        <Box>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Icon>euro</Icon>
              </ListItemIcon>
              <h2>Bezahlen</h2>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Icon>money</Icon>
              </ListItemIcon>
              <h2>Gutschein kaufen</h2>
            </ListItem>
          </List>
        </Box>
      ) : (
        <span>Laden konnte nicht gefunden werden</span>
      )}
    </>
  );
};

const FlexBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SpaceContainer = styled(Box)`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
`;

export default BusinessComponent;
