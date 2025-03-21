import React, { FC, useContext, useState } from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Tooltip,
  Collapse,
  IconButton,
  Divider,
} from "@mui/material";
import { CrazyProduct } from "@/models";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OfferContext } from "@/context/offerContext";

interface Props {
  product: CrazyProduct;
}

const ProductDetail: FC<Props> = ({ product }) => {
  const { showState } = useContext(OfferContext);
  const { description, id, title, url, price } = product;
  const { asPath } = useRouter();
  const [expanded, setExpanded] = useState(false);

  const handleChangeState = () => {
    showState(true);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      elevation={2}
      sx={{
        display: "flex",
        marginBottom: 3,
        marginTop: 2,
        flexDirection: "column",
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "#ffffff",
        position: "relative",
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 15px 30px rgba(0,0,0,0.1), 0 8px 12px rgba(0,0,0,0.08)",
        },
      }}
    >
      {/* Badge mejorado para productos destacados */}
      {id === 3 && (
        <Box
          sx={{
            position: "absolute",
            top: 15,
            right: 15,
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ff3d00 0%, #ff8a65 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            zIndex: 10,
            boxShadow: "0 4px 12px rgba(255, 61, 0, 0.4)",
            transform: "rotate(8deg)",
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": { boxShadow: "0 0 0 0 rgba(255, 61, 0, 0.4)" },
              "70%": { boxShadow: "0 0 0 10px rgba(255, 61, 0, 0)" },
              "100%": { boxShadow: "0 0 0 0 rgba(255, 61, 0, 0)" },
            },
          }}
        >
          <Typography variant="caption" sx={{ fontSize: "0.7rem", mb: -0.5 }}>
            MÁS
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
            VENDIDO
          </Typography>
          <Typography variant="caption" sx={{ fontSize: "0.65rem", mt: -0.5 }}>
            #1 EN VENTAS
          </Typography>
        </Box>
      )}

      {/* Contenedor de imagen mejorado */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "75%",
          backgroundColor: "#f9f9f9",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0) 70%, rgba(0,0,0,0.05) 100%)",
            zIndex: 1,
          },
        }}
      >
        <Image
          src={url}
          alt={title}
          layout="fill"
          objectFit="contain"
          loading="lazy"
          sizes="(max-width: 568px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, padding: 3, pb: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1.5,
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              color: "#2c3e50",
              fontWeight: "700",
              lineHeight: 1.3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              mr: 1.5,
              flex: 1,
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              borderRadius: 2,
              background:
                "linear-gradient(90deg, rgba(25,118,210,0.08) 0%, rgba(25,118,210,0.16) 100%)",
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(25,118,210,0.1)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#1976d2",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {price.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "#546e7a",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            mt: 1,
            lineHeight: 1.5,
          }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="mostrar más"
            sx={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
              color: "#9e9e9e",
              "&:hover": {
                color: "#1976d2",
                backgroundColor: "rgba(25, 118, 210, 0.04)",
              },
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider sx={{ mx: 3, opacity: 0.6 }} />
        <CardContent sx={{ px: 3, py: 2 }}>
          <Typography
            paragraph
            sx={{
              color: "#546e7a",
              lineHeight: 1.6,
              fontSize: "0.9rem",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Collapse>

      <Divider sx={{ mx: 3, opacity: 0.6 }} />

      <CardActions sx={{ justifyContent: "center", padding: 2.5 }}>
        {asPath === "/" ? (
          <Link href={`/${product.id}`} passHref legacyBehavior>
            <Tooltip title="Ver detalles del producto">
              <Button
                variant="outlined"
                startIcon={<ArrowForwardIcon />}
                size="medium"
                sx={{
                  borderColor: "#1976d2",
                  color: "#1976d2",
                  borderRadius: 2,
                  borderWidth: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#1976d2",
                    color: "#FFFFFF",
                    borderColor: "#1976d2",
                    boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                  },
                }}
              >
                Ver detalle
              </Button>
            </Tooltip>
          </Link>
        ) : (
          <Button
            variant="contained"
            startIcon={<WhatsappIcon />}
            size="medium"
            // onClick={handleChangeState}
            sx={{
              backgroundColor: "#1976d2",
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
              textTransform: "none",
              fontWeight: 600,
              px: 3,
              py: 1,
              "&:hover": {
                backgroundColor: "#1565c0",
                boxShadow: "0 6px 15px rgba(25, 118, 210, 0.4)",
              },
            }}
          >
            Hacer pedido por WhatsApp
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductDetail;
