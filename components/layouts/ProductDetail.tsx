import React, { FC } from 'react';
import Image from 'next/image'
import { Box, Typography, Button } from '@mui/material';
import { CrazyProduct } from '@/models';
import Link  from 'next/link';
import { useRouter } from 'next/router';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface Props{
  product: CrazyProduct
}

const ProductDetail:FC<Props> = ({product}) => {

  const { description,id,title,type,url,price } = product;

  const { asPath } = useRouter();


  return (
    
      <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', border:'1px solid', margin:'15px',textTransform:'capitalize' ,padding:'15px', borderRadius:5}}>
        <Typography variant='h3'>{ title }</Typography>
        <Typography variant='subtitle2'>{ description }</Typography>
        <Image src={url} width={355} height={355} alt={title}  />
            {
              asPath === '/'
              ?
              (
                <Link href={ `${product.id}` } passHref legacyBehavior>  
                  <Button variant="contained" style={{ marginBottom:'27px', padding:'1rem', marginTop:6 }} size="large" color='success'>
                    <ArrowForwardIcon></ArrowForwardIcon>
                    Ver detalle...
                  </Button>
                </Link>
              )
              :
              (null)
            }
        <Typography sx={{ fontWeight:700 }} variant='h2'>{ price.toLocaleString("es-AR",{ style: 'currency', currency:'ARS' }) }</Typography>
      </Box>
  )
}

export default ProductDetail;