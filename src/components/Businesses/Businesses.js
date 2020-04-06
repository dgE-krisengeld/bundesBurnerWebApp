import React from "react"
import { Box, List, ListItem, Icon, ListItemIcon } from "@material-ui/core"
import { Link } from "react-router-dom"
import { getAllBusinesses } from "../../services/business.service"

function BusinessesComponent() {
  const businesses = getAllBusinesses()
  return (
    <Box>
      <List>
        {Object.entries(businesses).map(([id, { title, icon }]) => (
          <ListItem button component={Link} to={`/businesses/${id}`} key={id}>
            <ListItemIcon>
              <Icon>{icon}</Icon>
            </ListItemIcon>
            <h3>{title}</h3>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default BusinessesComponent
