import { CrazyProduct } from "@/models";
import { FC } from "react";
import ProductDetail from './ProductDetail';

interface Props{
  product: CrazyProduct
}

export const ProductList:FC<Props> = ({ product }) => {

  return (
    <ProductDetail product={product} />
  )
}

export default ProductList