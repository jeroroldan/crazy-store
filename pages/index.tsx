import { ShopLayout } from "@/components/layouts";
import {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  memo,
} from "react";
import { OfferContext } from "@/context/offerContext";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

// Íconos de react-icons (más ligero que MUI icons)
import { FaWhatsapp, FaEye, FaChevronUp } from "react-icons/fa";

// 3. OPTIMIZACIÓN: Carga dinámica de componentes pesados con preload
const Products = dynamic(() => import("@/components/layouts/Products"), {
  ssr: false,
  loading: () => <ProductsLoadingSkeleton />,
});

const OfferModal = dynamic(() => import("@/components/ui/OfferModal"), {
  ssr: false,
  loading: () => null,
});

const Footer = dynamic(() => import("../components/ui/Footer"), {
  ssr: false,
  loading: () => null,
});

// NUEVA: Loading skeleton optimizado
const ProductsLoadingSkeleton = memo(() => (
  <div className="flex justify-center items-center p-8 min-h-[200px]">
    <div className="spinner"></div>
    <span className="ml-3 text-lg font-semibold text-primary-600">
      Cargando productos...
    </span>
  </div>
));

ProductsLoadingSkeleton.displayName = "ProductsLoadingSkeleton";

// 5. OPTIMIZACIÓN: Custom hook con debounce mejorado
const useScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let rafId: number;
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setShowScrollTop(window.scrollY > 300);
        }, 50); // Reducido de 100ms a 50ms para mejor responsividad
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return { showScrollTop, scrollToTop };
};

// 6. OPTIMIZACIÓN: Constantes fuera del componente
const CONTACT_PHONE = "341-6142211";
const WHATSAPP_CLEAN_PHONE = CONTACT_PHONE.replace(/-/g, "");
const WHATSAPP_URL = `https://wa.me/54${WHATSAPP_CLEAN_PHONE}`;

// 7. OPTIMIZACIÓN: Datos estáticos memoizados fuera del componente
const PAGE_DATA = Object.freeze({
  title: "Licores y bebidas vodka gin rom Crazy",
  description:
    "Licores bebidas Crazy - Los mejores precios en bebidas alcohólicas",
  mainTitle: "Hace tú pedido",
  subTitle: "Temporada Verano",
  contactText: `Hacé tu pedido: ${CONTACT_PHONE}`,
});

// NUEVA: Componente Header memoizado
type HeaderProps = {
  mainTitle: string;
  subTitle: string;
};

const Header = memo(({ mainTitle, subTitle }: HeaderProps) => (
  <header className="flex flex-col justify-center items-center mb-6 text-center px-4">
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight gradient-text mb-2">
      {mainTitle}
    </h1>
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mb-4">
      {subTitle}
    </h2>
  </header>
));

Header.displayName = "Header";

// NUEVA: Componente WhatsApp memoizado
type WhatsAppButtonProps = {
  contactText: string;
  onClick: () => void;
};

const WhatsAppButton = memo(({ contactText, onClick }: WhatsAppButtonProps) => (
  <div className="w-full max-w-2xl mb-6 px-4">
    <div className="w-full max-w-md mx-auto">
      <div
        className="btn-whatsapp group"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onClick();
          }
        }}
        aria-label={`Contactar por WhatsApp: ${contactText}`}
      >
        <FaWhatsapp className="text-3xl text-success-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-lg font-semibold text-gray-800 group-hover:text-success-700 text-center">
          {contactText}
        </span>
      </div>
    </div>
  </div>
));

WhatsAppButton.displayName = "WhatsAppButton";

// NUEVA: Botón de oferta memoizado
type OfferButtonProps = {
  hasBeenSeen: boolean;
  onClick: () => void;
};

const OfferButton = memo(({ hasBeenSeen, onClick }: OfferButtonProps) => (
  <div className="relative w-64 max-w-md mb-8 px-4">
    <button
      className="btn-primary w-full flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:transform active:translate-y-0 active:scale-95"
      onClick={onClick}
      aria-label="Ver oferta especial"
    >
      <FaEye className="text-xl" />
      Ver Oferta
    </button>

    {!hasBeenSeen && (
      <div
        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold animate-pulse z-10"
        aria-label="Nueva oferta disponible"
      >
        1
      </div>
    )}
  </div>
));

OfferButton.displayName = "OfferButton";

// NUEVA: Botón scroll memoizado
type ScrollTopButtonProps = {
  showScrollTop: boolean;
  onClick: () => void;
};

const ScrollTopButton = memo(({ showScrollTop, onClick }: ScrollTopButtonProps) => (
  <button
    className={`fixed bottom-20 right-8 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center ${
      showScrollTop
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-4 scale-90 pointer-events-none"
    } hover:scale-110 active:scale-95`}
    onClick={onClick}
    aria-label="Volver arriba"
    style={{ willChange: showScrollTop ? "transform, opacity" : "auto" }}
  >
    <FaChevronUp className="text-xl" />
  </button>
));

ScrollTopButton.displayName = "ScrollTopButton";

export default function Home() {
  const [open, setOpen] = useState(false);
  const contextValue = useContext(OfferContext);
  const { showState, hasBeenSeen } = contextValue;
  const { showScrollTop, scrollToTop } = useScrollTop();

  // 8. OPTIMIZACIÓN: Intersection Observer para Footer con configuración optimizada
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "200px 0px", // Aumentado para mejor preloading
  });

  // 9. OPTIMIZACIÓN: Handlers memoizados
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  }, []);

  // NUEVA: Memoización de datos computados
  const pageMetadata = useMemo(
    () => ({
      title: PAGE_DATA.title,
      description: PAGE_DATA.description,
    }),
    []
  );

  // OPTIMIZACIÓN: Effect con cleanup mejorado
  useEffect(() => {
    if (open && !hasBeenSeen) {
      // Usar timeout para evitar bloquear el render
      const timeoutId = setTimeout(() => {
        showState(true);
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [open, hasBeenSeen, showState]);

  // NUEVA: Preload del modal cuando se hace hover sobre el botón
  const [shouldPreloadModal, setShouldPreloadModal] = useState(false);

  const handleOfferButtonMouseEnter = useCallback(() => {
    if (!shouldPreloadModal) {
      setShouldPreloadModal(true);
    }
  }, [shouldPreloadModal]);

  return (
    <ShopLayout
      title={pageMetadata.title}
      description={pageMetadata.description}
    >
      {/* Main Container */}
      <div className="flex flex-col min-h-screen">
        {/* Content Container */}
        <main className="flex-1 flex flex-col items-center justify-start pb-12">
          {/* Header Section */}
          <Header
            mainTitle={PAGE_DATA.mainTitle}
            subTitle={PAGE_DATA.subTitle}
          />

          {/* WhatsApp Contact Section */}
          <WhatsAppButton
            contactText={PAGE_DATA.contactText}
            onClick={handleWhatsAppClick}
          />

          {/* Offer Button Section */}
          <div onMouseEnter={handleOfferButtonMouseEnter}>
            <OfferButton hasBeenSeen={hasBeenSeen} onClick={handleOpen} />
          </div>

          {/* Products Section - Cargado dinámicamente */}
          <Products />
        </main>

        {/* Footer with Intersection Observer */}
        <div ref={footerRef}>{footerInView && <Footer />}</div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollTopButton showScrollTop={showScrollTop} onClick={scrollToTop} />

      {/* Modal de oferta - preload condicional */}
      {(open || shouldPreloadModal) && (
        <OfferModal open={open} handleClose={handleClose} />
      )}
    </ShopLayout>
  );
}
