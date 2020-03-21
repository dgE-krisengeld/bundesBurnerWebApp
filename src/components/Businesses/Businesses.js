import React from "react";
import { Box, List, ListItem, Icon, ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getAllBusinesses } from "../../services/business.service";

function BusinessesComponent({ match }) {
  const businesses = getAllBusinesses();
  return (
    <Box>
      <h1>Lokale Geschäfte</h1>
      <List>
        {Object.entries(businesses).map(([id, { title, icon }]) => (
          <ListItem
            button
            component={Link}
            to={`${match.path}/business/${id}`}
            key={id}
          >
            <ListItemIcon>
              <Icon>{icon}</Icon>
            </ListItemIcon>
            <h3>{title}</h3>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default BusinessesComponent;
