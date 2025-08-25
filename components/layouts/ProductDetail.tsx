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

// Componentes de íconos simples para evitar problemas de tipos
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

const ProductDetail: FC<Props> = ({ product }) => {
  const { showState } = useContext(OfferContext);
  const { description, id, title, url, price } = product;
  const { asPath } = useRouter();
  const [expanded, setExpanded] = useState(false);

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

  return (
    <article className="bg-white rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden flex flex-col h-full relative group">
      {/* Badge destacado para producto más vendido */}
      {id === 3 && (
        <div className="absolute top-4 right-4 w-[90px] h-[90px] rounded-full bg-gradient-to-br from-red-600 to-orange-400 text-white text-center flex flex-col items-center justify-center font-bold z-10 shadow-lg rotate-2 animate-pulse-custom">
          <span className="text-[0.7rem] -mb-1 leading-none">MÁS</span>
          <span className="text-sm font-extrabold leading-none">VENDIDO</span>
          <span className="text-[0.65rem] -mt-1 leading-none">
            #1 EN VENTAS
          </span>
        </div>
      )}

      {/* Contenedor de imagen */}
      <div className="relative w-full pt-[75%] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient opacity-20"></div>
        <Image
          src={url}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 568px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col flex-grow px-6 pt-5 pb-2">
        {/* Título y precio */}
        <div className="flex justify-between items-start mb-4 gap-4">
          <h2 className="text-lg font-bold text-gray-800 leading-snug line-clamp-2 flex-1 hover:text-primary-700 transition-colors duration-200">
            {title}
          </h2>
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 text-primary-700 font-bold px-3 py-1.5 rounded-lg shadow-sm text-sm whitespace-nowrap">
            {formatPrice}
          </div>
        </div>

        {/* Descripción */}
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-3">
          {description}
        </p>

        {/* Botón expandir/contraer */}
        <div className="flex justify-center mt-auto">
          <button
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label={expanded ? "Mostrar menos" : "Mostrar más"}
            className={twMerge(
              "p-2 rounded-full transition-all duration-300 text-gray-400 hover:text-primary-600 hover:bg-primary-50",
              expanded ? "rotate-180" : "rotate-0"
            )}
          >
            <ChevronDownIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Contenido expandible */}
      <div
        className={twMerge(
          "transition-all duration-300 overflow-hidden",
          expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-gray-200 px-6 py-4">
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Separador */}
      <div className="border-t border-gray-200 mx-6 opacity-60" />

      {/* Botones de acción */}
      <div className="flex justify-center py-6">
        {asPath === "/" ? (
          <Link
            href={`/${product.id}`}
            className="group/btn flex items-center gap-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            Ver detalle
          </Link>
        ) : (
          <button
            onClick={handleWhatsAppClick}
            className="group/btn flex items-center gap-3 bg-success-600 hover:bg-success-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
            Hacer pedido por WhatsApp
          </button>
        )}
      </div>
    </article>
  );
};

export default React.memo(ProductDetail);
