import { Box, Paper, Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning.js";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        flexShrink: 0,
        backgroundColor: "#42a5f5",
        mt: "auto",
        zIndex: 10,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#42a5f5",
          py: 1.5,
          px: 2,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <WarningIcon sx={{ color: "#fff", mr: 1.5, fontSize: 28 }} />
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#fff",
            fontWeight: 600,
            letterSpacing: 0.5,
            textAlign: "center",
          }}
        >
          PROHIBIDA LA VENTA A MENORES DE 18 AÑOS
        </Typography>
      </Paper>
    </Box>
  );
}
