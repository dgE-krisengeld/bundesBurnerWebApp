import React from "react"
import { Link, withRouter } from "react-router-dom"
import {
  BottomNavigation,
  BottomNavigationAction,
  Icon,
} from "@material-ui/core"
import styled from "styled-components"

const menuItems = [
  {
    label: "Home",
    slug: "/",
    icon: "home",
  },
  {
    label: "Geschäfte",
    slug: "/businesses",
    icon: "store",
  },
  {
    label: "Hilfe",
    slug: "/help",
    icon: "help",
  },
]

const BottomMenu = ({ location: { pathname } }) => {
  return (
    <StyledBottomNavigation showLabels value={pathname}>
      {menuItems.map(({ label, slug, icon }) => (
        <BottomNavigationAction
          label={label}
          key={slug}
          icon={<Icon>{icon}</Icon>}
          component={Link}
          to={slug}
          value={slug}
        />
      ))}
    </StyledBottomNavigation>
  )
}

const StyledBottomNavigation = styled(BottomNavigation)`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`

export default withRouter(BottomMenu)
