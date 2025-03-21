import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import navImage from "../../public/todosCrazy.jpg";

const Navbar = () => {
  return (
    <AppBar
      className="image-fondo"
      sx={{
        minHeight: "270px",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Imagen de fondo */}
      <Image
        priority
        style={{
          position: "absolute",
          objectFit: "cover",
          objectPosition: "center 40%",
          zIndex: 0,
        }}
        fill
        className="h-full w-full object-cover"
        src={navImage}
        placeholder="blur"
        alt="Coffee grinder"
        quality={90}
      />

      {/* Capa de degradado transparente (en lugar de azul) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </AppBar>
  );
};

export default Navbar;
