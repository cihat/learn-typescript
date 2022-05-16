import "../styles/globals.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "../styles/theme";

const App = ({ Component, pageProps }: any) => (
  <ThemeProvider theme={theme}>
    <ChakraProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ChakraProvider>
  </ThemeProvider>
);

export default App;
