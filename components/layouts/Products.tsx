import Image from 'next/image'
import products from "@/data/products"
import { Box } from '@mui/material';
import ProductDetail from './ProductDetail';


export const Products = () => {

  return (
    <>
      <Box sx={{ display:'flex',alignItems:'center', alignContent:'center',flexWrap:'wrap', justifyContent:'center'}}>
        {
          products.map(product =>(
            <ProductDetail key={product.id} product={ product } />
          ))
        }
      </Box>
      
    </>
  )
}

export default Products;