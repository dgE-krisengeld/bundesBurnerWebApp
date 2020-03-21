import React from "react";
import { Box, Icon, List, ListItem, ListItemIcon } from "@material-ui/core";
import { getBusinessById } from "../../services/business.service";

const BusinessComponent = ({
  match: {
    params: { id }
  }
}) => {
  const business = getBusinessById(id);
  if (!business) return <span>Laden konnte nicht gefunden werden</span>;
  return (
    <Box>
      <p>
        <Icon>{business.icon}</Icon>
      </p>
      <h1>{business.title}</h1>

      <hr />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Icon>euro</Icon>
          </ListItemIcon>
          <h2>Bezahlen</h2>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icon>money</Icon>
          </ListItemIcon>
          <h2>Gutschein kaufen</h2>
        </ListItem>
      </List>
    </Box>
  );
};

export default BusinessComponent;
