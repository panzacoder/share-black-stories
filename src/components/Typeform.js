import React from "react";
import { ReactTypeformEmbed } from "react-typeform-embed";

const Typeform = ({ url }) => (
  <ReactTypeformEmbed url={url} opacity={0} style={{ position: "relative" }} />
);

export default Typeform;
