import React from "react";
import { HomeContainer } from "../containers/Home/Home";
import { QrCodeContainer } from "../containers/Home/QrCode";
import { MyQrCodeContainer } from "../containers/Home/MyQrCode";
import BusinessesContainer from "../containers/Businesses/Businesses";
import { HelpContainer } from "../containers/Help/Help";

const pages = [
  {
    path: "/scanQR",
    heading: "Scanne QR",
    component: QrCodeContainer
  },
  {
    path: "/myQrCode",
    heading: "Mein QR-Code",
    component: MyQrCodeContainer
  },
  {
    path: "/businesses",
    heading: "Geschäfte in deiner Nähe",
    component: BusinessesContainer
  },
  {
    path: "/help",
    heading: "Hilfe",
    component: HelpContainer
  },
  {
    path: "/pay",
    heading: "Zahlen",
    component: HomeContainer,
    backButton: true
  },
  {
    path: "/receive",
    heading: "Empfangen",
    component: HomeContainer
  },
  {
    path: "/",
    heading: <em>Home!!!!</em>,
    component: HomeContainer
  }
];

export default pages;
