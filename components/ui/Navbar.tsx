import Image from "next/image";
import navImage from "../../public/todosCrazy.jpg";

const Navbar = () => {
  return (
    <div
      className="relative flex items-center bg-gray-100"
      style={{ minHeight: "270px" }}
    >
      {/* Imagen de fondo */}
      <Image
        priority
        fill
        src={navImage}
        alt="Coffee grinder"
        quality={90}
        placeholder="blur"
        className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover"
        style={{
          objectPosition: "center 40%",
          zIndex: 0,
        }}
      />

      {/* Capa de degradado transparente */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))",
          zIndex: 10,
        }}
      />

      {/* Aquí puedes agregar el contenido del navbar */}
      <div className="relative w-full px-4" style={{ zIndex: 20 }}>
        {/* Tu contenido del navbar va aquí */}
      </div>
    </div>
  );
};

export default Navbar;
