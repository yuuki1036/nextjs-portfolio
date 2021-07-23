import { createTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Noto Sans JP"].join(","),
  },
});

export default theme;
