import React, { FC, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CrazyProduct } from "@/models";
import { OfferContext } from "@/context/offerContext";
import { twMerge } from "tailwind-merge";

interface Props {
  product: CrazyProduct;
}

// Componentes de íconos optimizados
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ProductDetail: FC<Props> = ({ product }) => {
  const { showState } = useContext(OfferContext);
  const { description, id, title, url, price } = product;
  const { asPath } = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleWhatsAppClick = () => {
    showState(true);
  };

  const formatPrice = price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  // Calcular "descuento" ficticio para mostrar precio tachado
  const originalPrice = Math.round(price * 1.25);
  const formatOriginalPrice = originalPrice.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <article className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden flex flex-col h-full relative border border-gray-100/50 backdrop-blur-sm">
      {/* Badge destacado con animación mejorada */}
      {id === 3 && (
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-orange-500 text-white text-center flex flex-col items-center justify-center font-bold z-20 shadow-xl rotate-3 group-hover:rotate-6 transition-transform duration-300">
          <StarIcon className="w-3 h-3 mb-0.5 text-yellow-300" />
          <span className="text-[0.6rem] font-black leading-none">MÁS</span>
          <span className="text-[0.7rem] font-black leading-none">VENDIDO</span>
        </div>
      )}

      {/* Indicador de descuento */}
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          -{discount}% OFF
        </div>
      </div>

      {/* Contenedor de imagen mejorado */}
      <div className="relative w-full pt-[70%] bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden">
        {/* Efecto de brillo de fondo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-60"></div>

        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
          </div>
        )}

        <Image
          src={url}
          alt={title}
          fill
          className={twMerge(
            "object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-1",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          loading="lazy"
          sizes="(max-width: 568px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Overlay gradient sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent group-hover:from-black/10 transition-all duration-300"></div>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col flex-grow px-6 pt-6 pb-2">
        {/* Título */}
        <h2 className="text-xl font-bold text-gray-900 leading-tight mb-4 line-clamp-2 group-hover:text-primary-700 transition-colors duration-300">
          {title}
        </h2>

        {/* Precio destacado con diseño moderno */}
        <div className="mb-4">
          {/* Precio anterior tachado */}
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-sm text-gray-400 line-through font-medium">
              {formatOriginalPrice}
            </span>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-semibold">
              Antes
            </span>
          </div>

          {/* Precio actual destacado */}
          <div className="relative">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium opacity-90 mb-1">
                    Precio especial
                  </p>
                  <p className="text-2xl font-black tracking-tight">
                    {formatPrice}
                  </p>
                </div>
                <div className="bg-white/20 p-2 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
              </div>

              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-4">
          {description}
        </p>

        {/* Botón expandir/contraer mejorado */}
        <div className="flex justify-center mt-auto">
          <button
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label={expanded ? "Mostrar menos" : "Mostrar más"}
            className={twMerge(
              "p-3 rounded-full transition-all duration-300 text-gray-400 hover:text-primary-600 hover:bg-primary-50 hover:shadow-md",
              expanded
                ? "rotate-180 bg-primary-50 text-primary-600"
                : "rotate-0"
            )}
          >
            <ChevronDownIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Contenido expandible */}
      <div
        className={twMerge(
          "transition-all duration-500 overflow-hidden",
          expanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-gray-100 px-6 py-5 bg-gray-50/50">
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Separador elegante */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-6" />

      {/* Botones de acción modernos */}
      <div className="flex justify-center py-6 px-6">
        {asPath === "/" ? (
          <Link
            href={`/${product.id}`}
            className="group/btn w-full flex items-center justify-center gap-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-bold px-6 py-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:border-primary-700 hover:bg-primary-700"
          >
            <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            Ver detalles
          </Link>
        ) : (
          <button
            onClick={handleWhatsAppClick}
            className="group/btn w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus-visible:ring-emerald-500"
          >
            <WhatsAppIcon className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110" />
            Pedir por WhatsApp
          </button>
        )}
      </div>
    </article>
  );
};

export default React.memo(ProductDetail);
