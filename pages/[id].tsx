import { useRouter } from 'next/router';
import React from 'react'
import { Button } from '@mui/material';
import ProductDetail from '@/components/layouts/ProductDetail'
import { ShopLayout } from '@/components/layouts';
import products from "@/data/products"
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    </ShopLayout>
  )
}

export default PageDetailProduct