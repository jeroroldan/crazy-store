import products from "@/data/products"
import { Box } from '@mui/material';
import ProductList from './ProductList';
import { FC } from "react";



export const Products = () => {

  return (
    <>
      <Box sx={{ display:'flex',alignItems:'center', alignContent:'center',flexWrap:'wrap', justifyContent:'center'}}>
        {
          products.map(product =>(
            <ProductList key={product.id} product={ product } />
          ))
        }
      </Box>
      
    </>
  )
}

export default Products;