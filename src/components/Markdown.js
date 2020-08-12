import React from "react";
// import rehypeReact from "rehype-react";
import ReactMarkdown from "markdown-to-jsx";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby-theme-material-ui";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  markdown: {
    "& a": {
      // color: palette.,
      // '&:hover': {
      // color: palette.blue,
      // },
    },
  },
}));

const H1 = (props) => (
  <Typography variant="h1" {...props} id={props.children} />
);
const H2 = (props) => (
  <Typography variant="h2" {...props} id={props.children} />
);
const H3 = (props) => (
  <Typography variant="h3" {...props} id={props.children} />
);
const H4 = (props) => (
  <Typography variant="h4" {...props} id={props.children} />
);
const H5 = (props) => (
  <Typography variant="h5" {...props} id={props.children} />
);
const H6 = (props) => (
  <Typography variant="h6" {...props} id={props.children} />
);

const Markdown = ({ className, ...rest }) => {
  const classes = useStyles();
  const options = {
    overrides: {
      a: Link,
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
    },
  };

  return (
    <ReactMarkdown
      options={options}
      className={`${classes.markdown} ${className}`}
      {...rest}
    />
  );
};

Markdown.propTypes = {
  htmlAst: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default React.memo(Markdown);
