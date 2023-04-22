import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { ShopLayout } from '@/components/layouts'
import { Box, Link, Typography } from '@mui/material';
import { Products } from '@/components/layouts/Products'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ShopLayout title={''} pageDescription={''}>
        <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center' }}>
          <Typography variant='h1' component='h1'>Cátalogo licores Crazy</Typography>
          <Typography variant='h6' sx={{ mb: 1 }}>Todos los productos</Typography>
          <Typography variant='h2' sx={{ mb: 1 }}>Contacto: 341-6142211</Typography>
          
            <Products/>
        <Typography 
          variant='h2' 
          sx={{ textTransform:'capitalize',marginTop:3 ,backgroundColor:'#8e64e7', width:'100%', textAlign:'center', padding:'15px' }}
        >
          PROHIBIDA LA VENTA A MENORES DE 18 años</Typography>
        </Box>
      </ShopLayout>
    </>
  )
}
