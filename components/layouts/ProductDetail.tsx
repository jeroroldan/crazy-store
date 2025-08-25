import React, { FC, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CrazyProduct } from "@/models";
import { OfferContext } from "@/context/offerContext";
import { FaArrowRight, FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface Props {
  product: CrazyProduct;
}

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
            <FaChevronDown className="w-4 h-4" />
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
            <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            Ver detalle
          </Link>
        ) : (
          <button
            onClick={handleWhatsAppClick}
            className="group/btn flex items-center gap-3 bg-success-600 hover:bg-success-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaWhatsapp className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
            Hacer pedido por WhatsApp
          </button>
        )}
      </div>
    </article>
  );
};

export default React.memo(ProductDetail);
