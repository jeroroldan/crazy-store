import { useRouter } from "next/router";
import React, { useMemo } from "react";
import ProductDetail from "@/components/layouts/ProductDetail";
import { ShopLayout } from "@/components/layouts";
import products from "@/data/products";
import Link from "next/link";

const PRODUCT_BENEFITS = [
  "Mejor precio del mercado",
  "Alto margen de ganancia",
  "Vencimiento prolongado",
  "Productos demandados",
  "Calidad superior",
  "Alta rotación",
  "Producto en temporada",
];

// Componentes de íconos SVG personalizados
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// Componente extraído para los beneficios
const ProductBenefits = React.memo(() => (
  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-md mx-auto shadow-sm">
    {/* Título con línea decorativa */}
    <div className="text-center mb-6 relative">
      <h3 className="text-xl font-semibold text-primary-700 mb-2">
        Beneficios del producto
      </h3>
      <div className="w-10 h-1 bg-primary-700 mx-auto rounded-full"></div>
    </div>

    {/* Lista de beneficios */}
    <div className="space-y-3 mt-4">
      {PRODUCT_BENEFITS.map((text, index) => (
        <div
          key={index}
          className="flex items-center py-2 px-3 rounded-lg transition-all duration-200 hover:bg-primary-50 hover:transform hover:translate-x-1"
        >
          <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
            <CheckIcon className="text-primary-700 w-4 h-4" />
          </div>
          <span className="font-medium text-gray-700 text-sm leading-relaxed">
            {text}
          </span>
        </div>
      ))}
    </div>
  </div>
));

ProductBenefits.displayName = "ProductBenefits";

const PageDetailProduct = () => {
  const router = useRouter(); // ✅ Declarar router
  const { query } = router;

  const valueId = useMemo(() => parseInt(query.id as string) || 0, [query.id]);
  const product = useMemo(
    () => products.find((p) => p.id === valueId),
    [valueId]
  );

  // Estado de producto no encontrado
  if (!product) {
    return (
      <ShopLayout
        title="Producto no encontrado"
        description="Licores Crazy"
        ogUrl={`https://crazy-liquors.com${router.asPath}`}
      >
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <div className="max-w-md">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Producto no encontrado
            </h1>
            <p className="text-gray-600 mb-8">
              El producto que buscas no existe o ha sido eliminado.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Volver a productos
            </Link>
          </div>
        </div>
      </ShopLayout>
    );
  }

  return (
    <ShopLayout
      title={`${product.title} - Licores Crazy`}
      description={product.description}
      ogImage={`https://crazy-store.vercel.app${product.url}`}
      ogUrl={`https://crazy-store.vercel.app${router.asPath}`}
    >
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Botón de retroceso */}
        <div className="flex justify-start mb-6">
          <Link
            href="/"
            replace
            className="inline-flex items-center gap-2 bg-success-600 hover:bg-success-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg min-w-[200px] justify-center"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Volver
          </Link>
        </div>

        {/* Detalle del producto */}
        <div className="mb-8">
          <ProductDetail product={product} />
        </div>

        {/* Sección de beneficios */}
        <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 w-full">
          <ProductBenefits />
        </div>
      </div>
    </ShopLayout>
  );
};

export default React.memo(PageDetailProduct);
