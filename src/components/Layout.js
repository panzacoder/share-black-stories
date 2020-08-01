import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const classes = makeStyles(() => ({
    container: {
      display: "grid",
      gridTemplateRows: "7rem minmax(calc(100vh - 7rem), 1fr) 7rem",
      gridTemplateAreas: `
        "header"
        "body"
        "footer"
        `,
      alignItems: "center",
    },
    header: { gridArea: "header" },
    footer: { gridArea: "footer" },
  }))();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.header}>
          <Navbar />
        </div>
        {children}
        <div className={classes.footer}>
          <Footer />
        </div>
      </Container>
    </div>
  );
};

export default TemplateWrapper;
