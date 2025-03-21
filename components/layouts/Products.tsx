import products from "@/data/products";
import { Box, Grid, Container } from "@mui/material";
import ProductList from "./ProductList";

export const Products = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Box sx={{ height: "100%" }}>
              <ProductList product={product} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
