import React from "react";
import { Box } from "@mui/material";

// Componente funcional para o Banner
const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "300px", sm: "350px", md: "500px" },
        backgroundImage: "url('https://picsum.photos/1200/800')", // URL de imagem que ajusta bem
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "20px",
        boxSizing: "border-box",
        borderRadius: "8px", // Bordas arredondadas para um visual mais suave
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)", // Sombra para dar destaque
        margin: "0", // Garantir que não haja margem externa
        position: "relative", // Caso queira manipular o posicionamento mais tarde
        marginTop: "-50px", // Desloca o Banner para cima
      }}
    >
      {/* <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra no texto para melhor contraste
        }}
      >
      </Typography> */}
    </Box>
  );
};

export default Banner;
