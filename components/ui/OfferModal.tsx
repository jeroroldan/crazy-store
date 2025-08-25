import React, { useEffect } from "react";

interface OfferModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function OfferModal({ open, handleClose }: OfferModalProps) {
  // Cierra el modal con ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) handleClose();
    };
    if (open) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open, handleClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100">
          {/* Barra superior decorativa */}
          <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-t-2xl" />

          {/* Contenido */}
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              ¡OFERTA ESPECIAL!
            </h2>

            <div className="bg-primary-100 rounded-xl p-4 mb-6">
              <div className="text-primary-700 font-bold text-xl">
                10% DE DESCUENTO
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Lleva 5 cajas o más (pueden ser surtidas) y obtén un 10% de
              descuento en el total de tu compra.
            </p>

            <button
              onClick={handleClose}
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
