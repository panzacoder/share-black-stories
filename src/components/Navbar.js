import React from "react";
import { Link } from "gatsby-theme-material-ui";
import { makeStyles } from "@material-ui/core/styles";

const Navbar = () => {
  const classes = makeStyles(({ typography }) => ({
    navbarContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateAreas: `"about home survey"`,
      justifyItems: "center",
      alignItems: "end",
    },
    home: { gridArea: "home" },
    about: { gridArea: "about" },
    survey: { gridArea: "survey" },
    active: { fontSize: typography.h2.fontSize },
  }))();

  return (
    <div className={classes.navbarContainer}>
      <Link
        to="/"
        variant="h4"
        className={classes.home}
        activeClassName={classes.active}
      >
        Home
      </Link>
      <Link
        to="/my-story"
        variant="h4"
        className={classes.survey}
        activeClassName={classes.active}
      >
        Survey
      </Link>
    </div>
  );
};

export default Navbar;
