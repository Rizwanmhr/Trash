import { createTheme, ThemeOptions } from "@mui/material/styles";
const greenBtn = "#459F65";
const hoverGreen = "#306F46";
const whiteBorderBtn = "#FFFFFF";
const borderWhiteClr = "#AEB59C";
const hoverWhiteBtn = "#FBF7F9";
const disableBtn = "#E0E0E0";
const disableText = "#A8A8A8";
const serviceHover = "#F8FBF9";
const linear = "#B8DAC4";
const checkout = "#D5D5D5";

const theme = createTheme({
  palette: {
    success: {
      main: `${greenBtn}`,
      light: `${hoverGreen}`,
      contrastText: `${serviceHover}`,
    },
    secondary: {
      main: `${whiteBorderBtn}`,
      contrastText: `${borderWhiteClr}`,
      light: `${hoverWhiteBtn}`,
    },
    info: {
      main: `${disableBtn}`,
      light: `${disableText}`,
      contrastText: `${linear}`,
    },
    primary: {
      main: `${checkout}`,
    },
  },
} as ThemeOptions);
export default theme;
