import { ShopLayout } from "@/components/layouts";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Grid,
  Typography,
  Alert,
  Stack,
  Modal,
} from "@mui/material";
import { Products } from "@/components/layouts/Products";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext, useState } from "react";
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
  const { showState, hasBeenSeen } = useContext(OfferContext);

  const handleOpen = () => {
    setOpen(true);
    showState(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ShopLayout
      title="Licores y bebidas vodka gin rom  Crazy"
      description="Licores bebidas Crazy"
    >
      {!hasBeenSeen ? (
        <Stack sx={{ width: "100%", justifyContent: "center" }} spacing={2}>
          <Alert
            variant="filled"
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              marginBottom: 3,
            }}
            severity="warning"
          >
            Tienes ofertas sin mirar!!!!
          </Alert>
        </Stack>
      ) : (
        <></>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
          <Typography
            variant="h1"
            style={{
              fontSize:75,
              textAlign: "center",
              lineHeight: "1.2",
              fontWeight: "bold",
            }}
            component="h1"
            ml={1}
          >
            Venta y
            <br />
            Distribución de Bebidas.
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Box display="flex" justifyContent="center" alignItems="center">
              <ShoppingCartIcon fontSize="large" />
              <Typography variant="h6" sx={{ mb: 1, ml: 1 }}>
                Todos los productos
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" justifyContent="center" alignItems="center">
              <PhoneIphoneIcon fontSize="large" />
              <Typography variant="h6" sx={{ mb: 1, ml: 1 }}>
                Contacto: 341-6142211
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          onClick={handleOpen}
          color="info"
          sx={{ padding: 2, width: "80%", mt: 2 }}
        >
          <VisibilityIcon />
          Ver Ofertas!!
        </Button>

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
