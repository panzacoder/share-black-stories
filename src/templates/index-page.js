import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";

export const IndexPageTemplate = ({ sections }) => {
  console.log(sections);
  const classes = makeStyles(() => ({
    mainGrid: {
      alignSelf: "start",
      display: "grid",
      marginTop: "10rem",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: `repeat(${sections?.length || 1}, 1fr)`,
      alignItems: "start",
      gridColumnGap: "1rem",
      gridRowGap: "6rem",
    },
    leftSection: {
      gridColumn: "1/7",
    },
    rightSection: {
      gridColumn: "6/13",
      textAlign: "right",
    },
  }))();
  return (
    <div className={classes.mainGrid}>
      {sections?.map((section, index) => (
        <Typography
          variant="h1"
          className={
            index % 2 === 0 ? classes.leftSection : classes.rightSection
          }
        >
          {section}
        </Typography>
      ))}
    </div>
  );
};

IndexPageTemplate.propTypes = {
  sections: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate sections={frontmatter.sections} />
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
        sections
      }
    }
  }
`;
