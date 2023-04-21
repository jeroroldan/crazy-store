import Image from 'next/image'
import { CrazyProduct } from "@/models"
import { Box, Typography } from "@mui/material"
import { FC } from "react"
import ProductDetail from './ProductDetail'




interface Props{
  product: CrazyProduct
}

export const ProductList:FC<Props> = ({ product }) => {

  const { description,id,title,type,url,price } = product;


  return (
    <ProductDetail product={product} />
  )
}

export default ProductList