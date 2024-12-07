import { FC } from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Tu Empresa
          {" • "}
          <Link color="inherit" href="/privacy">
            Política de Privacidad
          </Link>
          {" • "}
          <Link color="inherit" href="/terms">
            Términos de Servicio
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
