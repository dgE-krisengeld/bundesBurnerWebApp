import React from "react"
import { Box, Icon, List, ListItem, ListItemIcon } from "@material-ui/core"
import { getBusinessById } from "../../services/business.service"
import { useRouteMatch } from "react-router-dom"

const BusinessComponent = () => {
  const {
    params: { id },
  } = useRouteMatch()
  const business = getBusinessById(id)
  return business ? (
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
  )
}

export default BusinessComponent
