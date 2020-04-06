import React from "react"
import { BusinessComponent } from "../../components/Businesses/Business"
import { markers } from "../../dummyData/markers"

export function BusinessContainer({ id }) {
  const marker = markers[id]

  return <BusinessComponent marker={marker} />
}
