import React from "react";
import loadable from "@loadable/component";
import Layout from "../components/Layout";

const Typeform = loadable(() => import("../components/Typeform"));

const Survey = () => (
  <Layout>
    <Typeform url="https://jacobshebert.typeform.com/to/yjJYPjQM" />
  </Layout>
);

export default Survey;
