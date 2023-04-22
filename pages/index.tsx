import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { ShopLayout } from '@/components/layouts'
import { Box, Grid, Link, Typography } from '@mui/material';
import { Products } from '@/components/layouts/Products';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalBarIcon from '@mui/icons-material/LocalBar';


export default function Home() {
  return (
    <>
      <ShopLayout title={''} pageDescription={''}>
        <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center' }}>
          <Box display={'flex'} justifyContent={'center'}>
            <LocalBarIcon fontSize='large'></LocalBarIcon>
            <Typography variant='h1' component='h1'>Cátalogo licores Crazy</Typography>
          </Box>
          <Grid container display={'flex'} flexDirection={'column'}>
            <Grid item>
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <ShoppingCartIcon fontSize='large'></ShoppingCartIcon>
                <Typography variant='h6' sx={{ mb: 1 }}>Todos los productos</Typography>
              </Box>
            </Grid>
            <Grid item>  
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <PhoneIphoneIcon fontSize='large'></PhoneIphoneIcon>
                <Typography variant='h2' sx={{ mb: 1 }}>Contacto: 341-6142211</Typography>
              </Box>
            </Grid>
          </Grid>
          <Products/>
        <Typography 
          variant='h2' 
          sx={{ textTransform:'capitalize',marginTop:3 ,backgroundColor:'#8e64e7', width:'100%', textAlign:'center', padding:'15px' }}
        >
          PROHIBIDA LA VENTA A MENORES DE 18 años</Typography>
        </Box>
      </ShopLayout>
      {/* hola mundo */}
    </>
  )
}
