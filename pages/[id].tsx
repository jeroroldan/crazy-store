import { useRouter } from 'next/router';
import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import ProductDetail from '@/components/layouts/ProductDetail'
import { ShopLayout } from '@/components/layouts';
import products from "@/data/products"
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';

export const PageDetailProduct = () => {

  const { query } = useRouter();

  let parseQuery = query.id as string;

  let valueId = parseInt(parseQuery)
  


  return (
    <ShopLayout title='productos categoria' pageDescription='licores crazy'>
      <Link  href="/" replace>
        <Button variant="contained"  size="large" color='success'>
          <ArrowBackIcon></ArrowBackIcon>
          volver
        </Button>
      </Link>
      <ProductDetail product={products[valueId|| 0]} />

      <Grid container style={{ display:'flex' , flexDirection:'column' }}>
        <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
          <DoneIcon color='info'></DoneIcon>
          <Typography>Mejor precio del mercado</Typography>
        </Grid>
        <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
          <DoneIcon color='info'></DoneIcon>
          <Typography>Alto margen de ganacia</Typography>
        </Grid>
        <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
          <DoneIcon color='info'></DoneIcon>
          <Typography>Vencimento prolongado</Typography>
        </Grid>
        <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
          <DoneIcon color='info'></DoneIcon>
          <Typography>Productos demandados</Typography>
        </Grid>
        <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
          <DoneIcon color='info'></DoneIcon>
          <Typography>Calidad superior</Typography>
        </Grid>
        <Grid item style={{ display: 'flex' , justifyContent:'center', margin:'auto' }}>
          <DoneIcon color='info'></DoneIcon>
          <Typography>Alta rotación</Typography>
        </Grid>
      </Grid>

    </ShopLayout>
  )
}

export default PageDetailProduct