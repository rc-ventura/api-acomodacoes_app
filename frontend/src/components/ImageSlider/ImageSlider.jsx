import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import IconSection from "../IconSection/IconSection";

// Configurações do Slider
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dados dos slides (Imagens + Descrição)
  const slidesData = [
    {
      img: "https://picsum.photos/1000/600",
      cod: "D1970",
      title: "Casa Moderna",
      price: "R$ 450.000",
      localization: "Minas Gerais, MG",
      description: "Uma casa moderna e espaçosa em localização privilegiada.",
      rooms: 4,
      bathrooms: 3,
      garage: 2,
      area: "200 m²",
    },
    {
      img: "https://picsum.photos/1000/600?2",
      cod: "J1980",
      title: "Apartamento no Centro",
      price: "R$ 300.000",
      localization: "São Paulo, SP",
      description: "Apartamento com 2 quartos e ótimo acesso a transportes públicos.",
      rooms: 2,
      bathrooms: 1,
      garage: 1,
      area: "75 m²",
    },
    {
      img: "https://picsum.photos/1000/600?3",
      cod: "A3210",
      title: "Casa de Campo",
      price: "R$ 600.000",
      localization: "Rio de Janeiro, RJ",
      description: "Casa tranquila em meio à natureza, ideal para descanso.",
      rooms: 3,
      bathrooms: 2,
      garage: 1,
      area: "150 m²",
    },
    {
      img: "https://picsum.photos/1000/600?4",
      cod: "D2070",
      title: "Cobertura Luxuosa",
      price: "R$ 1.200.000",
      localization: "Florianópolis, SC",
      description: "Cobertura de alto padrão com vista deslumbrante da cidade.",
      rooms: 5,
      bathrooms: 4,
      garage: 3,
      area: "300 m²",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
        marginBottom: "3rem"
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "90%" },
          height: { xs: "auto", md: "500px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // 🔥 Empilha em telas pequenas
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          overflow: "hidden", // 🔥 Evita cortes
        }}
      >
        {/* Slider para imagens */}
        <Box
          sx={{
            width: { xs: "100%", md: "60%" }, // 🔥 Ajusta largura conforme tela
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Slider {...settings} afterChange={(index) => setCurrentIndex(index)} style={{ width: "100%" }}>
            {slidesData.map((slide, index) => (
              <Box key={index} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img
                  src={slide.img}
                  alt={`Imagem ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "10px 0 0 10px",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Informações do Imóvel */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            padding: { xs: "20px", md: "50px" }, // 🔥 Ajuste de espaçamento para mobile e desktop
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" }, // 🔥 Centraliza em telas pequenas
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "#333", marginBottom: "0.5rem" }}
          >
            Cód: {slidesData[currentIndex].cod}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem",
            }}
          >
            {slidesData[currentIndex].title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontWeight: "normal",
              color: "#555",
              marginBottom: "1rem",
            }}
          >
            {slidesData[currentIndex].localization}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#007bff",
              marginBottom: "1rem",
            }}
          >
            {slidesData[currentIndex].price}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#555",
              marginBottom: "1rem",
              maxWidth: "90%",
            }}
          >
            {slidesData[currentIndex].description}
          </Typography>

          {/* Seção de Ícones */}
          <Box sx={{ width: "100%", marginTop: "10px" }}>
            <IconSection icon={slidesData[currentIndex]} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSlider;
