import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import ProductDetail from '@/components/layouts/ProductDetail'
import { ShopLayout } from '@/components/layouts';
import products from "@/data/products"
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';
import { OfferContext } from '@/context/offerContext';

export const PageDetailProduct = () => {

  const { query } = useRouter();

  const { showState } = useContext(OfferContext);

  let parseQuery = query.id as string;

  let valueId = parseInt(parseQuery);

  const handleChangeButton = () => {
    showState(true)
  }
  


  return (
    <ShopLayout title='productos categoria' pageDescription='licores crazy'>
      <Link  href="/" replace>
        <Button 
          variant="contained"  
          size="large" 
          color='success'
          onClick={ handleChangeButton }
        >
          <ArrowBackIcon></ArrowBackIcon>
          volver
        </Button>
      </Link>
      <ProductDetail product={products[valueId|| 0]} />

      <Box border={0.5} borderRadius={'5px'} padding={2} bgcolor={'#eaeaea'} width={'100%'}>
        <Grid container style={{ display:'flex' , flexDirection:'column' }}>
          <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
            <DoneIcon color='info'></DoneIcon>
            <Typography fontWeight={500}>Mejor precio del mercado</Typography>
          </Grid>
          <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
            <DoneIcon color='info'></DoneIcon>
            <Typography fontWeight={500}>Alto margen de ganacia</Typography>
          </Grid>
          <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
            <DoneIcon color='info'></DoneIcon>
            <Typography fontWeight={500}>Vencimento prolongado</Typography>
          </Grid>
          <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
            <DoneIcon color='info'></DoneIcon>
            <Typography fontWeight={500}>Productos demandados</Typography>
          </Grid>
          <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
            <DoneIcon color='info'></DoneIcon>
            <Typography fontWeight={500}>Calidad superior</Typography>
          </Grid>
          <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
            <DoneIcon color='info'></DoneIcon>
            <Typography fontWeight={500}>Alta rotación</Typography>
          </Grid>
          <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
            <DoneIcon color='info'></DoneIcon>
            <Typography fontWeight={500}>Producto en temporada</Typography>
          </Grid>
        </Grid>
      </Box>


    </ShopLayout>
  )
}

export default PageDetailProduct