import React from "react"
import BusinessesComponent from "../../components/Businesses/Businesses"
import { Route, Switch } from "react-router-dom"
import BusinessComponent from "../../components/Businesses/Business"

export default function BusinessesContainer({ match }) {
  return (
    <Switch>
      <Route path={`${match.url}/business/:id`} component={BusinessComponent} />
      <Route path={`${match.url}`} component={BusinessesComponent} />
    </Switch>
  )
}
