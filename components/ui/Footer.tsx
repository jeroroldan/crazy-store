import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex-shrink-0 bg-primary-400 mt-auto z-10">
      <div className="flex items-center justify-center bg-primary-400 py-6 px-4 rounded-t-lg shadow-lg">
        <FaExclamationTriangle className="text-white text-3xl mr-4 flex-shrink-0" />
        <h6 className="text-white text-lg md:text-xl font-semibold tracking-wider text-center leading-tight">
          PROHIBIDA LA VENTA A MENORES DE 18 AÑOS
        </h6>
      </div>
    </footer>
  );
}
