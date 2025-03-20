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
} from "@mui/material";
import { Products } from "@/components/layouts/Products";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext, useEffect, useState } from "react";
import { OfferContext } from "@/context/offerContext";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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

        <Typography
          variant="h2"
          sx={{
            textTransform: "capitalize",
            marginTop: 3,
            color: "#ffff",
            borderRadius: 3,
            backgroundColor: "#8e64e7",
            width: "100%",
            textAlign: "center",
            padding: "15px",
          }}
        >
          PROHIBIDA LA VENTA A MENORES DE 18 años
        </Typography>
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
          <Box sx={modalStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              OFERTA VIGENTE
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Comprando 5 cajas pueden ser surtidas de cada variedad se aplica
                un 10% al total de la compra.
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </ShopLayout>
  );
}
