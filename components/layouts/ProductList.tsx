import { CrazyProduct } from "@/models";
import { FC } from "react";
import ProductDetail from './ProductDetail';

interface Props {
  product: CrazyProduct;
  priority?: boolean;
}

export const ProductList: FC<Props> = ({ product, priority = false }) => {
  return <ProductDetail product={product} priority={priority} />;
};

export default ProductList