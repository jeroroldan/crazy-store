import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ProductDetail from "@/components/layouts/ProductDetail";
import { ShopLayout } from "@/components/layouts";
import products from "@/data/products";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneIcon from "@mui/icons-material/Done";

const PageDetailProduct = () => {
  const { query } = useRouter();
  const valueId = useMemo(() => parseInt(query.id as string) || 0, [query.id]);

  return (
    <ShopLayout title="Productos Categoría" description="Licores Crazy">
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
      <ProductDetail product={products[valueId]} />

      <Box
        border={0.5}
        borderRadius="5px"
        padding={2}
        bgcolor="#eaeaea"
        width="100%"
        mt={2}
      >
        <Grid container direction="column" alignItems="center" spacing={1}>
          {[
            "Mejor precio del mercado",
            "Alto margen de ganancia",
            "Vencimiento prolongado",
            "Productos demandados",
            "Calidad superior",
            "Alta rotación",
            "Producto en temporada",
          ].map((text, index) => (
            <Grid
              item
              key={index}
              container
              justifyContent="center"
              alignItems="center"
            >
              <DoneIcon color="info" />
              <Typography fontWeight={500} ml={1}>
                {text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ShopLayout>
  );
};

export default PageDetailProduct;
