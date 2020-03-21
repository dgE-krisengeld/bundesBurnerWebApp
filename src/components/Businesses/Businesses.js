import React from "react";
import { Box, List, ListItem, Icon } from "@material-ui/core";
import { markers } from "../../dummyData/markers";

export function BusinessesComponent() {
  return (
    <Box>
      <h1>Lokale Geschäfte</h1>
      <List>
        {Object.entries(markers).map(([key, { coordinates, title, icon }]) => (
          <ListItem>
            <h3>
              <Icon>{icon}</Icon> {title}
            </h3>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
