import Image from 'next/image'
import { CrazyProduct } from "@/models"
import { Box, Typography } from "@mui/material"
import { FC } from "react"




interface Props{
  product: CrazyProduct
}

export const ProductDetail:FC<Props> = ({ product }) => {

  const { description,id,title,type,url,price } = product;


  return (
    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', border:'1px solid', margin:'15px',textTransform:'capitalize' ,padding:'15px', borderRadius:5}}>
      <Typography variant='h3'>{ title }</Typography>
      <Typography variant='subtitle2'>{ description }</Typography>
      <Image src={url} width={300} height={300} alt={title}  />
      <Typography variant='h2'>{ price.toLocaleString("es-AR",{ style: 'currency', currency:'ARS' }) }</Typography>
    </Box>
  )
}

export default ProductDetail