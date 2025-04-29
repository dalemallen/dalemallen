// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b26328", // Deep brown from shirt
    },
    secondary: {
      main: "#4EB1B1", // Soft teal from earrings
    },
    background: {
      default: "#0E0E0E", // Black base
      paper: "#1A1A1A", // Slightly lighter for cards/forms
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#E0E0E0",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none" },
  },
});

export default theme;
