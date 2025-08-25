import products from "@/data/products";
import ProductList from "./ProductList";

export const Products = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="h-full">
            <ProductList product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
