import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#292CFF",
    },
    secondary: {
      main: "#292CFF66",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const colors = {
  brand: {
    50: "#e3e5ff",
    100: "#b2b4ff",
    200: "#7f81ff",
    300: "#4c4fff",
    400: "#1a1dff",
    500: "#0003e6",
    600: "#0002b4",
    700: "#000182",
    800: "#000050",
    900: "#000021",
  },
  white: {
    900: "#FFF",
  },
  black: {
    900: "#000",
    400: "#66FF0000",
  },
};

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const chakraTheme = extendTheme({
  breakpoints,
  colors,
  fonts: {
    heading: `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
    body: `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
  styles: {
    global: {
      ".mdx-prose": {
        h1: {
          fontSize: "2em",
          fontWeight: "bold",
        },
        h2: {
          fontSize: "1,5em",
          fontWeight: "bold",
        },
        h3: {
          m: "5px 0",
          fontSize: "1,17em",
          fontWeight: "bold",
        },
        h4: {
          m: "5px 0",
          fontSize: "1em",
          fontWeight: "bold",
        },
        h5: {
          m: "5px 0",
          fontSize: "0,83em",
          fontWeight: "bold",
        },
        h6: {
          m: "5px 0",
          fontSize: "0,67em",
          fontWeight: "bold",
        },
      },
    },
  },
});

const theme = deepmerge(chakraTheme, muiTheme);

export default theme