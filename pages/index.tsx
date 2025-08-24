import { ShopLayout } from "@/components/layouts";
import { Box, Button, Grid, Typography, Badge, Fab, Zoom } from "@mui/material";
import { Products } from "@/components/layouts/Products";
import WhatsAppIcon from "@mui/icons-material/WhatsApp.js";
import VisibilityIcon from "@mui/icons-material/Visibility.js";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp.js";
import { useContext, useEffect, useState, useCallback, useMemo } from "react";
import { OfferContext } from "@/context/offerContext";
import dynamic from "next/dynamic";
import { styled } from "@mui/system";

// Dynamic imports optimizados con loading
const OfferModal = dynamic(() => import("@/components/ui/OfferModal"), {
  ssr: false,
  loading: () => <div>Cargando oferta...</div>,
});

const Footer = dynamic(() => import("../components/ui/Footer"), {
  ssr: false,
  loading: () => <div>Cargando...</div>,
});

// Styled Components para mejor rendimiento
const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: "1 0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingBottom: theme.spacing(6),
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: theme.spacing(3),
}));

const MainTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "classes" && prop !== "sx" && prop !== "theme",
})(({ theme }) => ({
  fontSize: "clamp(2.5rem, 8vw, 4rem)", // Responsive font size
  textAlign: "center",
  lineHeight: 1.2,
  fontWeight: "bold",
  background: "linear-gradient(45deg, #1976d2, #42a5f5)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
  textAlign: "center",
  lineHeight: 1.2,
  fontWeight: "bold",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const ContactContainer = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  width: "100%",
  maxWidth: 600,
}));

const WhatsAppContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[50],
  borderRadius: theme.spacing(2),
  border: `2px solid ${theme.palette.success.light}`,
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.success.light,
    transform: "translateY(-2px)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Cambia esta línea
  },
}));

const OfferButtonContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  width: "100%",
  maxWidth: 400,
  marginBottom: theme.spacing(4),
}));

const OfferButton = styled(Button)(({ theme }) => ({
  padding: "12px 24px",
  width: "100%",
  borderRadius: theme.spacing(2),
  fontWeight: 600,
  fontSize: "1rem",
  textTransform: "none",
  boxShadow: "0 6px 12px rgba(2, 136, 209, 0.25), 0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#0277bd",
    transform: "translateY(-3px)",
    boxShadow:
      "0 8px 15px rgba(2, 136, 209, 0.3), 0 5px 10px rgba(0, 0, 0, 0.15)",
  },
  "&:active": {
    transform: "translateY(1px)",
    boxShadow: "0 3px 8px rgba(2, 136, 209, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)",
  },
}));

const ScrollTopFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: 80,
  right: 30,
  zIndex: 1000,
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

// Custom hooks para lógica reutilizable
const useScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    // Throttle para mejor rendimiento
    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return { showScrollTop, scrollToTop };
};

// Constantes para evitar hardcoding
const CONTACT_PHONE = "341-6142211";
const WHATSAPP_URL = `https://wa.me/54${CONTACT_PHONE.replace(/-/g, "")}`;

export default function Home() {
  const [open, setOpen] = useState(false);
  const contextValue = useContext(OfferContext);
  const { showState, hasBeenSeen } = contextValue;
  const { showScrollTop, scrollToTop } = useScrollTop();

  // Memoizar handlers para evitar re-renders innecesarios
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  }, []);

  // Effect optimizado
  useEffect(() => {
    if (open) {
      showState(true);
    }
  }, [open, showState]);

  // Memoizar datos estáticos
  const pageData = useMemo(
    () => ({
      title: "Licores y bebidas vodka gin rom Crazy",
      description:
        "Licores bebidas Crazy - Los mejores precios en bebidas alcohólicas",
      mainTitle: "Crazy Licores",
      subTitle: "Temporada Invierno",
      contactText: `Hacé tu pedido: ${CONTACT_PHONE}`,
    }),
    []
  );

  return (
    <ShopLayout title={pageData.title} description={pageData.description}>
      <MainContainer>
        <ContentContainer>
          <HeaderContainer>
            <MainTitle variant="h1" as="h1">
              {pageData.mainTitle}
            </MainTitle>
            <SubTitle variant="h2" as="h2">
              {pageData.subTitle}
            </SubTitle>
          </HeaderContainer>

          <ContactContainer container justifyContent="center">
            <Grid item xs={12} sm={10} md={8}>
              <WhatsAppContainer onClick={handleWhatsAppClick}>
                <WhatsAppIcon fontSize="large" color="success" />
                <Typography
                  variant="h6"
                  sx={{ ml: 1, textAlign: "center", fontWeight: 600 }}
                >
                  {pageData.contactText}
                </Typography>
              </WhatsAppContainer>
            </Grid>
          </ContactContainer>

          <OfferButtonContainer>
            <OfferButton
              variant="contained"
              onClick={handleOpen}
              color="info"
              startIcon={<VisibilityIcon />}
              aria-label="Ver oferta especial"
            >
              Ver Oferta
            </OfferButton>
            {!hasBeenSeen && (
              <Badge
                badgeContent="1"
                color="error"
                sx={{
                  position: "absolute",
                  top: 15,
                  right: 3,
                  zIndex: 999,
                }}
                aria-label="Nueva oferta disponible"
              />
            )}
          </OfferButtonContainer>

          <Products />
        </ContentContainer>

        <Footer />
      </MainContainer>

      {/* Botón para volver arriba */}
      <Zoom in={showScrollTop}>
        <ScrollTopFab
          color="primary"
          size="medium"
          aria-label="Volver arriba"
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon />
        </ScrollTopFab>
      </Zoom>

      {/* Modal de oferta */}
      <OfferModal open={open} handleClose={handleClose} />
    </ShopLayout>
  );
}
