import { Modal, Fade, Box, Typography, Button } from "@mui/material";

interface OfferModalProps {
  open: boolean;
  handleClose: () => void;
}

export  function OfferModal({ open, handleClose }: OfferModalProps) {
  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
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
          <Typography variant="h6">¡OFERTA ESPECIAL!</Typography>
          <Button onClick={handleClose}>Cerrar</Button>
        </Box>
      </Fade>
    </Modal>
  );
}

export default OfferModal;
