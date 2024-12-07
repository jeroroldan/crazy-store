import React, { FC, useContext } from "react";
import Image from "next/image";
import { Box, Typography, Button, Grid, Tooltip } from "@mui/material";
import { CrazyProduct } from "@/models";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { OfferContext } from "@/context/offerContext";

interface Props {
  product: CrazyProduct;
}

const ProductDetail: FC<Props> = ({ product }) => {
  const { showState } = useContext(OfferContext);
  const { description, id, title, url, price } = product;
  const { asPath } = useRouter();

  const handleChangeState = () => {
    showState(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "15px 5px 10px #48529944",
        alignItems: "center",
        border: "1px solid",
        margin: "15px",
        textTransform: "capitalize",
        padding: "15px",
        borderRadius: 5,
        transition: ".5s",
        "&:hover": {
          transform: "translateY(-15px)",
        },
      }}
    >
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {description}
      </Typography>
      <Image src={url} width={355} height={355} alt={title} />
      {asPath === "/" && (
        <Link href={`/${product.id}`} passHref legacyBehavior>
          <Tooltip title="Ir a página de detalle">
            <Button
              variant="contained"
              sx={{ marginBottom: "27px", padding: "1rem", marginTop: 2 }}
              size="large"
              color="success"
            >
              <ArrowForwardIcon />
              Ver detalle...
            </Button>
          </Tooltip>
        </Link>
      )}
      <Typography sx={{ fontWeight: 700, fontSize: "2rem" }}>
        {price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}
      </Typography>
    </Box>
  );
};

export default ProductDetail;
