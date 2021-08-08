import {
  colors,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

let theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[800],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 768,
      lg: 900,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: ["Roboto", "Noto Sans JP"].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
