import { markers } from "../dummyData/markers";

export function getAllBusinesses() {
  return markers;
}

export function getBusinessById(id) {
  return markers[id];
}
