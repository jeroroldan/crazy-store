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
} from "@mui/material";
import { Products } from "@/components/layouts/Products";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WarningIcon from "@mui/icons-material/Warning";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext, useEffect, useState } from "react";
import { OfferContext } from "@/context/offerContext";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const contextValue = useContext(OfferContext);
  const { showState, hasBeenSeen } = contextValue;


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

  return (
    <ShopLayout
      title="Licores y bebidas vodka gin rom  Crazy"
      description="Licores bebidas Crazy"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
            variant="outlined"
            onClick={handleOpen}
            color="info"
            sx={{
              padding: 2,
              width: "100%",
              mt: 2,
              "&:hover": {
                color: "white",
                backgroundColor: "#0288d1",
              },
            }}
          >
            <VisibilityIcon sx={{ mr: 1 }} />
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

        <Box
          component="footer"
          sx={{
            width: "100%",
            position: "sticky",
            bottom: 0,
            mt: 4,
            zIndex: 10,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#8e64e7",
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
