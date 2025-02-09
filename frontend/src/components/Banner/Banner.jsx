import React from "react";
import { Box } from "@mui/material";

// Componente funcional para o Banner
const Banner = () => {
  return (
    <Box
      sx={{
        width: "100vw", // 🔥 Agora ocupa TODA a tela sem margem
        height: { xs: "350px", sm: "400px", md: "650px", lg: "700px" }, // Altura responsiva
        backgroundImage: "url('https://picsum.photos/1200/800')", // URL dinâmica
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "0px", // 🔥 Remove qualquer padding
        boxSizing: "border-box",
        margin: "0px", // 🔥 Remove qualquer margem externa
        position: "relative", // 🔥 Garante que ocupa a tela toda
        left: "-1rem", // 🔥 Remove margem na esquerda
        right: "0px", // 🔥 Remove margem na direita
        top: "-5rem", // 🔥 Se precisar alinhar ao topo
      }}
    >
    </Box>
  );
};

export default Banner;
