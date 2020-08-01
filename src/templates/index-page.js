import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";

export const IndexPageTemplate = ({ heading }) => {
  const classes = makeStyles(() => ({
    mainGrid: {
      marginTop: "10rem",
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      alignItems: "center",
      gridColumnGap: "1rem",
    },
    leftSection: {
      gridColumn: "1/7",
    },
    rightSection: {
      gridColumn: "6/13",
    },
  }))();
  return (
    <div className={classes.mainGrid}>
      <Typography variant="h1" className={classes.leftSection}>
        {heading}
      </Typography>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate heading={frontmatter.heading} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
      }
    }
  }
`;
