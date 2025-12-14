import React from "react";

// Componente de ícono SVG personalizado
const ExclamationTriangleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    width="24"
    height="24"
  >
    <path
      fillRule="evenodd"
      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742-2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full flex-shrink-0 bg-primary-900 mt-auto z-10">
      <div className="flex flex-col sm:flex-row items-center justify-center bg-primary-900 py-4 px-4 gap-2 sm:gap-3 rounded-t-xl shadow-inner text-center">
        <ExclamationTriangleIcon className="text-yellow-400 w-6 h-6 flex-shrink-0" />
        <h6 className="text-white text-sm sm:text-base font-medium mb-0 tracking-wide leading-snug">
          PROHIBIDA LA VENTA A MENORES DE 18 AÑOS
        </h6>
      </div>
    </footer>
  );
}
