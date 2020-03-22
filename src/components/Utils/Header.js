import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useLocation, useHistory } from "react-router-dom";
import pages from "../../navigation/pages";
import { IconButton, Icon } from "@material-ui/core";
import styled from "styled-components";

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

  const urlSlugs = location.pathname.split("/").filter(slug => slug.length);

  const page = pages.find(({ path }) => {
    const pageSlugs = path.split("/").filter(slug => slug.length);
    if (pageSlugs.length > urlSlugs.length) return false;

    return pageSlugs.reduce((acc, pageSlug, index) => {
      const urlSlug = urlSlugs[index];

      if (pageSlug.substring(0, 1) === ":") return acc;

      return acc && pageSlug === urlSlug;
    }, true);
  });
  const params = page?.path
    .split("/")
    .filter(slug => slug.length)
    .reduce((acc, pageSlug, index) => {
      if (pageSlug.substring(0, 1) === ":") {
        acc[pageSlug.substring(1)] = urlSlugs[index];
      }
      return acc;
    }, {});

  const content =
    typeof page?.heading === "function" ? page?.heading(params) : page?.heading;

  const contentRight =
    typeof page?.headingRight === "function"
      ? page?.headingRight(params)
      : page?.headingRight;

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {page?.backButton ? (
            <IconButton onClick={goBack} color="inherit">
              <Icon>navigate_before</Icon>
            </IconButton>
          ) : (
            <IconButton></IconButton>
          )}
          <Typography variant="h6" className={classes.title}>
            {content}
          </Typography>
          <FillSpace />
          {contentRight}
        </Toolbar>
      </AppBar>
    </>
  );
};

const FillSpace = styled.div`
  flex-grow: 1;
`;
