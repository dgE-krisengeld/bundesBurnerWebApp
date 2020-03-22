import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useLocation, useHistory } from "react-router-dom";
import pages from "../../navigation/pages";
import { IconButton, Icon } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));
export const Header = props => {
  const location = useLocation();
  const { goBack } = useHistory();
  const classes = useStyles();
  const page = pages.find(({ path }) => location.pathname === path);
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {page?.backButton ? (
            <IconButton onClick={goBack} color="inherit">
              <Icon>navigate_before</Icon>
            </IconButton>
          ) : <IconButton></IconButton>}

          <Typography variant="h6" className={classes.title}>
            {page?.heading}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
