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
  Collapse,
} from "@mui/material";
import { CrazyProduct } from "@/models";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
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

  return (
    <Card
      elevation={3}
      sx={{
        display: "flex",
        marginBottom: 2,
        marginTop: 2,
        flexDirection: "column",
        height: "100%",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: (theme) => theme.shadows[10],
        },
        minWidth: "80%",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "75%",
          overflow: "hidden",
        }}
      >
        <Image
          src={url}
          alt={title}
          layout="fill"
          objectFit="contain"
          loading="lazy" // Carga perezosa en lugar de priority
          sizes="(max-width: 568px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, padding: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              color: "#333",
              fontWeight: "bold",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              mr: 1,
              flex: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#1976d2",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              backgroundColor: "rgba(25, 118, 210, 0.1)",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            {price.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            mt: 1,
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
                    backgroundColor: "#2571DB",
                    color: "#FFFFFF",
                    borderColor: "#2571DB",
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
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Hacer Pédido por Whatsapp al número que figura al inicio
          </Button>
        )}
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
