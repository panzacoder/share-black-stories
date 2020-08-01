import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";

const Typeform = ({ url }) => (
  <Typography>
    Font Credit:{" "}
    <Link to="http://cnap.graphismeenfrance.fr/faune/en.html">
      “Faune, Alice Savoie / Cnap”
    </Link>
  </Typography>
);

export default Typeform;
