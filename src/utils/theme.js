// theme.js
import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Blue
    },
    background: {
      default: "#ffffff", // White
      paper: "#f5f5f5", // Light Gray
    },
    text: {
      primary: "#000000", // Black
      secondary: "#757575", // Gray
    },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Light Blue
    },
    background: {
      default: "#121212", // Dark Gray
      paper: "#1e1e1e", // Darker Gray
    },
    text: {
      primary: "#ffffff", // White
      secondary: "#b0b0b0", // Light Gray
    },
  },
});