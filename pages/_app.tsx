import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { OfferProvider } from "../context/offerContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Mantuve el azul principal que ya tenías
      light: "#42a5f5", // Tono más claro
      dark: "#1565c0", // Tono más oscuro
    },
    secondary: {
      main: "#4d82cb", // Reemplazé el rosado por un azul medio que tiene intensidad similar al morado
      light: "#64b5f6", // Tono más claro del azul secundario
      dark: "#0d47a1", // Tono más oscuro
    },
    background: {
      default: "#f4f6f8", // Mantuve el fondo que ya tenías
      paper: "#ffffff", // Fondo para tarjetas y superficies elevadas
    },
    text: {
      primary: "#333333",
      secondary: "#757575",
    },
    action: {
      active: "#1976d2",
      hover: "rgba(25, 118, 210, 0.08)",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OfferProvider>
        <Component {...pageProps} />
      </OfferProvider>
    </ThemeProvider>
  );
}

export default MyApp;
