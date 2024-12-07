import React, { FC, useContext, useState } from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  Tooltip,
  IconButton,
  Collapse,
} from "@mui/material";
import { CrazyProduct } from "@/models";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
  const [isFavorite, setIsFavorite] = useState(false);

  const handleChangeState = () => {
    showState(true);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card
      elevation={3}
      sx={{
        display: "flex",
        marginBottom:2,
        flexDirection: "column",
        height: "100%",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: (theme) => theme.shadows[10],
        },
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          src={url}
          alt={title}
          layout="fill"
          objectFit="contain"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Chip
          label={price.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
          color="primary"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "rgba(25, 118, 210, 0.9)",
            color: "white",
            backdropFilter: "blur(4px)",
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, padding: 2 }}>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{
            color: "#333",
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
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
                  "&:hover": {
                    backgroundColor: "rgba(25, 118, 210, 0.04)",
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
            startIcon={<ShoppingCartIcon />}
            size="medium"
            onClick={handleChangeState}
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Hacer Pédido por Whatsapp al número que figura al inicio
          </Button>
        )}
        <Box>
          <Tooltip
            title={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          >
            <IconButton
              onClick={handleFavoriteClick}
              sx={{
                color: isFavorite ? "red" : "grey.500",
              }}
            >
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={
              expanded ? "Ocultar descripción" : "Ver descripción completa"
            }
          >
            <IconButton
              onClick={handleExpandClick}
              sx={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProductDetail;
