import React, { useState } from "react";
import { HomeContainer } from "../containers/Home/Home";
import { QrCodeContainer } from "../containers/Home/QrCode";
import { MyQrCodeContainer } from "../containers/Home/MyQrCode";
import { HelpContainer } from "../containers/Help/Help";
import { LoadWalletContainer } from "../containers/Wallet/LoadWallet";
import { PayContainer } from "../containers/Pay/Pay";
import { OpenContainer } from "../containers/Open/Open";
import BusinessesComponent from "../components/Businesses/Businesses";
import {
  Icon,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";
import { getBusinessById } from "../services/business.service";
import BusinessComponent from "../components/Businesses/Business";
import { Link } from "react-router-dom";

const HomeMenu = () => {
  const [menuAnchorElement, setMenuAnchorElement] = useState(null);
  return (
    <>
      <IconButton
        aria-controls="business-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={event => {
          setMenuAnchorElement(event.currentTarget);
        }}
      >
        <Icon>arrow_drop_down</Icon>
      </IconButton>
      <Menu
        id="business-menu"
        anchorEl={menuAnchorElement}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => setMenuAnchorElement(null)}
        open={Boolean(menuAnchorElement)}
      >
        <MenuItem component={Link} to="/business">
          <ListItemIcon>
            <Icon fontSize="small">store</Icon>
          </ListItemIcon>
          zur dg€-App für Geschäftsinhaber
        </MenuItem>
      </Menu>
    </>
  );
};

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
    path: "/businesses/:id",
    heading: ({ id }) => {
      const business = getBusinessById(id);
      return business ? business.title : "Nicht gefunden";
    },
    headingRight: ({ id }) => {
      const business = getBusinessById(id);
      return business && <Icon>{business.icon}</Icon>;
    },
    backButton: true,
    component: BusinessComponent
  },
  {
    path: "/businesses",
    heading: "Geschäfte in deiner Nähe",
    component: BusinessesComponent
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
    path: "/open/:json",
    heading: "Wallet laden",
    component: OpenContainer
  },
  {
    path: "/loadWallet",
    heading: "Wallet laden",
    component: LoadWalletContainer
  },
  {
    path: "/",
    heading: "Home",
    component: HomeContainer,
    headingRight: HomeMenu
  }
];

export default pages;
