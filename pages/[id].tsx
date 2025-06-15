import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import ProductDetail from "@/components/layouts/ProductDetail";
import { ShopLayout } from "@/components/layouts";
import products from "@/data/products";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack.js";
import DoneIcon from "@mui/icons-material/Done.js";

// Lista de beneficios como constante fuera del componente para evitar recrearla
const PRODUCT_BENEFITS = [
  "Mejor precio del mercado",
  "Alto margen de ganancia",
  "Vencimiento prolongado",
  "Productos demandados",
  "Calidad superior",
  "Alta rotación",
  "Producto en temporada",
];

// Estilos constantes fuera del componente para evitar recreaciones
const styles = {
  benefitsCard: {
    borderRadius: 2,
    p: 3,
    backgroundColor: "#f9f9f9",
    maxWidth: 400,
    mx: "auto",
    border: "1px solid #e0e0e0",
    overflow: "visible",
  },
  benefitsTitle: {
    textAlign: "center",
    mb: 3,
    fontWeight: 600,
    color: "#1976d2",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      width: 40,
      height: 3,
      backgroundColor: "#1976d2",
      bottom: -8,
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  benefitItem: {
    display: "flex",
    alignItems: "center",
    py: 0.5,
    px: 1,
    borderRadius: 1,
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.08)",
      transform: "translateX(5px)",
    },
  },
  benefitIcon: {
    color: "#1976d2",
    mr: 1.5,
    backgroundColor: "rgba(25, 118, 210, 0.12)",
    borderRadius: "50%",
    p: 0.5,
  },
  benefitText: {
    fontWeight: 500,
    color: "#424242",
  },
};

// Componente extraído para los beneficios
const ProductBenefits = () => (
  <Card elevation={2} sx={styles.benefitsCard}>
    <Typography variant="h6" sx={styles.benefitsTitle}>
      Beneficios del producto
    </Typography>

    <Grid container direction="column" spacing={2} sx={{ mt: 1 }}>
      {PRODUCT_BENEFITS.map((text, index) => (
        <Grid item key={index} sx={styles.benefitItem}>
          <DoneIcon sx={styles.benefitIcon} />
          <Typography sx={styles.benefitText}>{text}</Typography>
        </Grid>
      ))}
    </Grid>
  </Card>
);

const PageDetailProduct = () => {
  const { query } = useRouter();
  const valueId = useMemo(() => parseInt(query.id as string) || 0, [query.id]);
  const product = useMemo(
    () => products.find((p) => p.id === valueId),
    [valueId]
  );

  if (!product) {
    return (
      <ShopLayout title="Producto no encontrado" description="Licores Crazy">
        <Box textAlign="center" py={5}>
          <Typography variant="h5">Producto no encontrado</Typography>
          <Link href="/" passHref>
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
              <ArrowBackIcon sx={{ mr: 1 }} />
              Volver a productos
            </Button>
          </Link>
        </Box>
      </ShopLayout>
    );
  }

  return (
    <ShopLayout
      title={`${product.title} - Licores Crazy`}
      description={`Detalles del producto: ${product.title}`}
    >
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Link href="/" replace>
          <Button
            variant="contained"
            size="large"
            color="success"
            sx={{ width: "200px" }}
          >
            <ArrowBackIcon />
            Volver
          </Button>
        </Link>
      </Box>

      <ProductDetail product={product} />

      <Box
        border={0.5}
        borderRadius="5px"
        padding={2}
        bgcolor="#eaeaea"
        width="100%"
        mt={2}
      >
        <ProductBenefits />
      </Box>
    </ShopLayout>
  );
};

export default React.memo(PageDetailProduct);
