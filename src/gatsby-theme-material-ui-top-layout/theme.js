import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const palette = {
  almostBlack: "#020010",
  notWhite: "#F5F5F5",
  deep: "#640018",
};

export const linkIconDefault = {
  boxDefaults: {
    color: palette.notWhite,
    backgroundColor: palette.almostBlack,
    iconColor: palette.deep,
    iconBackgroundColor: palette.notWhite,

    colorHover: palette.almostBlack,
    backgroundColorHover: palette.notWhite,
    iconColorHover: palette.almostBlack,
    iconBackgroundColorHover: palette.notWhite,
  },
  textDefaults: {
    color: palette.notWhite,
    backgroundColor: palette.almostBlack,
    iconColor: palette.deep,
    iconBackgroundColor: palette.notWhite,

    colorHover: palette.almostBlack,
    backgroundColorHover: palette.notWhite,
    iconColorHover: palette.almostBlack,
    iconBackgroundColorHover: palette.notWhite,
  },
};

let theme = createMuiTheme({
  palette: {
    primary: {
      light: palette.almostBlack,
      main: palette.notWhite,
      dark: palette.notWhite,
    },
    background: {
      paper: palette.deep,
      default: palette.almostBlack,
      dark: palette.almostBlack,
    },
    text: {
      primary: palette.notWhite,
      secondary: palette.deep,
    },
    ...palette,
  },

  typography: {
    fontFamily: '"Faune", sans-serif',
  },
  props: {
    MuiButtonBase: {
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
    MuiLink: {
      underline: "hover",
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiListItem: {
      // Name of the rule
      button: {
        // Some CSS
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
    MuiLink: {
      root: {
        color: palette.notWhite,
        "&:hover": {
          // color: palette.deep,
        },
      },
    },
  },
});

theme.typography.h1 = {
  fontFamily: '"Faune", sans-serif',
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: theme.typography.pxToRem(56),
  lineHeight: 1.16,
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.pxToRem(44),
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.pxToRem(36),
  },
};

theme.typography.h2 = {
  fontFamily: '"Faune", sans-serif',
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: theme.typography.pxToRem(36),
  lineHeight: 1.16,
  // marginTop: '2rem',
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.pxToRem(26),
  },
};
theme.typography.h3 = {
  fontFamily: '"Faune", sans-serif',
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: theme.typography.pxToRem(22),
  lineHeight: 1.3,
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.pxToRem(18),
  },
};
theme.typography.h4 = {
  fontFamily: '"Faune", sans-serif',
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: theme.typography.pxToRem(18),
  lineHeight: 1.3,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.pxToRem(14),
  },
};
theme.typography.h5 = {
  fontFamily: '"Faune", sans-serif',
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: theme.typography.pxToRem(14),
  lineHeight: 1.3,
  letterSpacing: ".02rem",
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.pxToRem(12),
  },
};
// body lead
theme.typography.h6 = {
  fontFamily: '"Faune", sans-serif',
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: theme.typography.pxToRem(22),
  lineHeight: 1.4,
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.pxToRem(18),
  },
};
theme.typography.body1 = {
  fontFamily: '"Faune", sans-serif',
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: theme.typography.pxToRem(18),
  lineHeight: 1.4,
  letterSpacing: "0rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.pxToRem(14),
  },
};
//body small
theme.typography.body2 = {
  fontFamily: '"Faune", sans-serif',
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: theme.typography.pxToRem(14),
  lineHeight: 1.4,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.pxToRem(12),
  },
};
// eyebrow
theme.typography.overline = {
  fontFamily: '"Recursive", monospaced', // mono linear static
  fontVariationSettings: `"MONO" 1,`,
  fontStyle: "normal",
  color: theme.palette.grayMedian,
  fontWeight: "600",
  fontSize: theme.typography.pxToRem(14),
  lineHeight: 1.4,
  letterSpacing: "0.01rem",
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.pxToRem(11),
  },
};
// quote large
theme.typography.subtitle1 = {
  fontFamily: '"Recursive", sans-serif',
  fontVariationSettings: "'slnt' -13",
  fontWeight: "normal",
  fontSize: theme.typography.pxToRem(36),
  color: theme.palette.grayDark,
  lineHeight: 1.4,
  letterSpacing: "0.00rem",
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.pxToRem(24),
  },
};
//quote medium  -- pxToRem(18) => quote small
theme.typography.subtitle2 = {
  fontFamily: '"Recursive", sans-serif',
  fontVariationSettings: "'slnt' -13",
  fontWeight: "normal",
  fontSize: theme.typography.pxToRem(22),
  color: theme.palette.grayDark,
  lineHeight: 1.4,
  // textIndent: '-0.5em',
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.pxToRem(18),
  },
};
theme.typography.caption = {
  fontFamily: '"Recursive", monospaced',
  fontVariationSettings: `"MONO" 1,`,
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: theme.typography.pxToRem(12),
  lineHeight: 1.33,
  letterSpacing: "0.00rem",
  marginTop: "2rem",
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.pxToRem(10),
  },
};
theme.typography.button = {
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: theme.typography.pxToRem(16),
  lineHeight: 1.4,
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.pxToRem(12),
  },
};
theme = responsiveFontSizes(theme, { maxFontSize: 56, factor: 2 });

export default theme;
