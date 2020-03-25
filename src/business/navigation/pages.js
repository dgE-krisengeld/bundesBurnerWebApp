import { Welcome } from "../components/welcome";
import { Register } from "../components/register";
import { Receive } from "../components/receive";
import { Dashboard } from "../components/dashboard";

const pathPrefix = "/business";
export const pages = [
  {
    path: pathPrefix + "/register",
    title: "Registrieren",
    component: Register
  },
  {
    path: pathPrefix + "/dashboard",
    title: "Dashboard",
    component: Dashboard
  },
  {
    path: pathPrefix + "/receive",
    title: "Empfangen",
    component: Receive
  },
  {
    path: pathPrefix + "/",
    title: "Welcome",
    component: Welcome
  }
];
