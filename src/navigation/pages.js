import React from "react";
import { HomeContainer } from "../containers/Home/Home";
import { QrCodeContainer } from "../containers/Home/QrCode";
import { MyQrCodeContainer } from "../containers/Home/MyQrCode";
import BusinessesContainer from "../containers/Businesses/Businesses";
import { HelpContainer } from "../containers/Help/Help";
import {LoadWalletContainer} from "../containers/Wallet/LoadWallet";
import {PayContainer} from "../containers/Pay/Pay";

const pages = [
  {
    path: "/scanQR",
    heading: "Scanne QR",
    component: QrCodeContainer,
    backButton: true
  },
  {
    path: "/myQrCode",
    heading: "Mein QR-Code",
    component: MyQrCodeContainer,
    backButton: true
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
    path: "/pay/:recipient/:amount",
    heading: "Geld senden",
    component: PayContainer,
    backButton: true
  },
  {
    path: "/pay",
    heading: "Geld senden",
    component: PayContainer,
    backButton: true
  },
  {
    path: "/receive",
    heading: "Empfangen",
    component: HomeContainer
  },
  {
    path: "/loadWallet",
    heading: "Wallet laden",
    component: LoadWalletContainer
  },
  {
    path: "/",
    heading: "Home",
    component: HomeContainer
  }
];

export default pages;
