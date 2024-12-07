import { FC } from "react";
import Head from "next/head";
import Navbar from "../ui/Navbar";
import { Box, Container } from "@mui/material";

interface LayoutProps {
  title: string;
  description: string;
  imageUrl?: string;
  children: JSX.Element | JSX.Element[];
}

export const ShopLayout: FC<LayoutProps> = ({
  children,
  title,
  description,
  imageUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
      </Head>

      <nav>
        <Navbar />
      </nav>

      <Container component="main" sx={mainStyles}>
        {children}
      </Container>

    </>
  );
};

const mainStyles = {
  margin: "16px auto",
  maxWidth: "1440px",
  padding: "0 30px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
};

const footerStyles = {
  marginTop: "auto",
  padding: "20px 0",
  textAlign: "center",
  backgroundColor: "#f8f8f8",
  borderTop: "1px solid #e7e7e7",
};

export default ShopLayout;
