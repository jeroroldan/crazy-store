import React, { FC } from 'react';
import Image from 'next/image'
import { Box, Typography } from '@mui/material';
import { CrazyProduct } from '@/models';
import Link from 'next/link';


interface Props{
  product: CrazyProduct
}

const ProductDetail:FC<Props> = ({product}) => {

  const { description,id,title,type,url,price } = product;


  return (
    <Link href={ `${product.id}` } passHref legacyBehavior>
      <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', border:'1px solid', margin:'15px',textTransform:'capitalize' ,padding:'15px', borderRadius:5}}>
        <Typography variant='h3'>{ title }</Typography>
        <Typography variant='subtitle2'>{ description }</Typography>
        <Image src={url} width={355} height={355} alt={title}  />
        <Typography variant='h2'>{ price.toLocaleString("es-AR",{ style: 'currency', currency:'ARS' }) }</Typography>
      </Box>
    </Link>
  )
}

export default ProductDetail