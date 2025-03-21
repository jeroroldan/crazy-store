import { ShopLayout } from "@/components/layouts";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Grid,
  Typography,
  Modal,
  Badge,
  Paper,
  Fab,
  Zoom,
} from "@mui/material";
import { Products } from "@/components/layouts/Products";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WarningIcon from "@mui/icons-material/Warning";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useContext, useEffect, useState } from "react";
import { OfferContext } from "@/context/offerContext";

export default function Home() {
  const [open, setOpen] = useState(false);
  const contextValue = useContext(OfferContext);
  const { showState, hasBeenSeen } = contextValue;
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Controlar cuándo mostrar el botón de scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      showState(true);
    }
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ShopLayout
      title="Licores y bebidas vodka gin rom  Crazy"
      description="Licores bebidas Crazy"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Asegura que el contenedor ocupe al menos toda la altura de la pantalla
        }}
      >
        <Box
          sx={{
            flex: "1 0 auto", // Esto permite que este Box crezca y ocupe el espacio disponible
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start", // Cambié a flex-start para que el contenido no se centre verticalmente
            pb: 6, // Padding bottom para evitar que el contenido sea tapado por el footer
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h1"
              style={{
                fontSize: 65,
                textAlign: "center",
                lineHeight: "1.2",
                fontWeight: "bold",
              }}
              component="h1"
            >
              Distribución de Bebidas
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Box display="flex" justifyContent="center" alignItems="center">
                <WhatsAppIcon fontSize="large" color="success" />
                <Typography variant="h6" sx={{ ml: 1, my: 0 }}>
                  Hace tú pedido: 341-6142211
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{ position: "relative", display: "inline-block", width: "80%" }}
          >
            <Button
              variant="contained"
              onClick={handleOpen}
              color="info"
              sx={{
                padding: "12px 24px",
                width: "100%",
                mt: 2,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                boxShadow:
                  "0 6px 12px rgba(2, 136, 209, 0.25), 0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#0277bd",
                  transform: "translateY(-3px)",
                  boxShadow:
                    "0 8px 15px rgba(2, 136, 209, 0.3), 0 5px 10px rgba(0, 0, 0, 0.15)",
                },
                "&:active": {
                  transform: "translateY(1px)",
                  boxShadow:
                    "0 3px 8px rgba(2, 136, 209, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)",
                },
              }}
              startIcon={<VisibilityIcon />}
            >
              Ver Oferta
            </Button>
            {!hasBeenSeen ? (
              <Badge
                badgeContent="1"
                color="error"
                sx={{
                  position: "absolute",
                  top: 15,
                  right: 3,
                  zIndex: 999,
                }}
              />
            ) : null}
          </Box>

          <Products />
        </Box>

        {/* Footer como componente de pie de página fijo */}
        <Box
          component="footer"
          sx={{
            width: "100%",
            flexShrink: 0, // Evita que el footer se encoja
            backgroundColor: "#42a5f5",
            mt: "auto", // Empuja el footer hacia abajo automáticamente
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
      </Box>

      {/* Botón para volver arriba */}
      <Zoom in={showScrollTop}>
        <Fab
          color="primary"
          size="medium"
          aria-label="scroll back to top"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 80,
            right: 30, // Aumentado de 16 a 30px para alejarlo del borde
            zIndex: 1000,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>

      {/* Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: 400 },
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
              p: 4,
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 8,
                bgcolor: "primary.main",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            />

            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "primary.main",
                mt: 1,
              }}
            >
              ¡OFERTA ESPECIAL!
            </Typography>

            <Box sx={{ my: 3, display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "primary.light",
                  borderRadius: 1.5,
                  color: "primary.contrastText",
                  display: "inline-block",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                10% DE DESCUENTO
              </Box>
            </Box>

            <Typography sx={{ fontSize: "1rem", mb: 3, lineHeight: 1.6 }}>
              Lleva 5 cajas o más (pueden ser surtidas) y obtén un 10% de
              descuento en el total de tu compra.
            </Typography>

            <Box
              sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 2 }}
            >
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{ minWidth: 100 }}
              >
                Cerrar
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </ShopLayout>
  );
}
