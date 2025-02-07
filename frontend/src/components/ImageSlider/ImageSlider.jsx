  import React, { useState } from "react";
  import Slider from "react-slick";
  import { Box, Typography } from "@mui/material";

  // Configurações do Slider
  const settings = {
    dots: false, // Mostrar pontos de navegação
    infinite: true, // O slider vai ser infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Quantidade de imagens visíveis por vez
    slidesToScroll: 1, // Quantidade de imagens a rolar por vez
    autoplay: true, // Habilita o autoplay
    autoplaySpeed: 3000, // Intervalo entre as trocas de imagem
    arrows: false, // Habilita as setas de navegação
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
      },
      {
        img: "https://picsum.photos/1000/600?2",
        cod: "J1980",
        title: "Apartamento no Centro",
        price: "R$ 300.000",
        localization: "São Paulo, SP",
        description: "Apartamento com 2 quartos e ótimo acesso a transportes públicos.",
      },
      {
        img: "https://picsum.photos/1000/600?3",
        cod: "A3210",
        title: "Casa de Campo",
        price: "R$ 600.000",
        localization: "Rio de Janeiro, RJ",
        description: "Casa tranquila em meio à natureza, ideal para descanso.",
      },
      {
        img: "https://picsum.photos/1000/600?4",
        cod: "D2070",
        title: "Cobertura Luxuosa",
        price: "R$ 1.200.000",
        localization: "Florianópolis, SC",
        description: "Cobertura de alto padrão com vista deslumbrante da cidade.",
      },
    ];

    

    return (
      <div>
        {/* Box que envolve o slider */}
        <Box
          sx={{
            width: "100%", // A largura do componente vai ocupar 100% da tela
            display: "flex",
            justifyContent: "center", // Alinha o conteúdo à esquerda
            marginTop: "40px", // Margem superior para afastar do topo da página
          }}
        >
          <Box
            sx={{
              width: "90%", 
              height: "500px",
              display: "flex", // Layout flexbox para imagem e card
              backgroundColor: "f8f9fa", // Fundo branco para o box
              borderRadius: "10px", // Bordas arredondadas
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Sombra suave
              padding: "50px", // Adiciona espaçamento interno
            }}
          >

            {/* Dinamic slide*/}

<Slider
          {...settings}
          afterChange={(index) => setCurrentIndex(index)} // Atualiza o slide atual
        >
          {/* Slides serão gerados automaticamente com base nos dados*/}
          {slidesData.map((slide, index) => (
            <div key={index} />
          ))}
            
        </Slider> 
            {/* Imagem */}
            <Box sx={{ width: "60%", display: "flex", justifyContent: "center" }}>
              <img
                src={slidesData[currentIndex].img}
                alt={`Imagem ${currentIndex + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "5px"
                }}
              />
            </Box>

            {/* Card explicativo */}
            <Box
              sx={{
                width: "60%", // O card ocupará a outra metade
                paddingLeft: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "normal",
              }}
            > 
            <Typography 
                variant="h7"
                 sx={{ fontWeight: "normal", 
                 color: "#333", 
                 marginBottom: '5rem' }}>
                   Cód: {slidesData[currentIndex].cod} </Typography>


              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333", marginBottom: '5rem' }}>
                {slidesData[currentIndex].title}
              </Typography>

              <Typography variant="h7" sx={{ fontWeight: "normal", color: "#333", marginBottom: '5rem' }}>
                {slidesData[currentIndex].localization}
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#007bff", marginTop: "10px" }}>
                {slidesData[currentIndex].price}
              </Typography>

              <Typography variant="body1" sx={{ marginTop: "10px", color: "#555" }}>
                {slidesData[currentIndex].description}
              </Typography>

              {/* Botão
              <Button variant="contained" color="primary" sx={{ marginTop: "20px" }}>
                Saiba mais
              </Button> */}
            </Box>
          </Box>
        </Box>

        
        
      </div>
    );
  };

  export default ImageSlider;
