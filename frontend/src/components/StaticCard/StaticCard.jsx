import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const StaticCard = () => {
  const cardData = [
    {
      img: "https://picsum.photos/300/200?1",
      title: "Loft Industrial",
      price: "R$ 500.000",
      description: "Loft moderno com design industrial, pé-direito alto e conceito aberto.",
    },
    {
      img: "https://picsum.photos/300/200?2",
      title: "Mansão Exclusiva",
      price: "R$ 3.500.000",
      description: "Mansão de luxo com piscina, spa e amplo jardim em bairro nobre.",
    },
    {
      img: "https://picsum.photos/300/200?3",
      title: "Apartamento Compacto",
      price: "R$ 250.000",
      description: "Apartamento pequeno, funcional e bem localizado para quem busca praticidade.",
    },
    {
      img: "https://picsum.photos/300/200?4",
      title: "Residência Contemporânea",
      price: "R$ 800.000",
      description: "Casa com arquitetura moderna, iluminação natural e tecnologia sustentável.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "50px",
        marginTop: "40px",
      }}
    >
      {cardData.slice(0,3).map((card, index) => (
        <Card
          key={index}
          sx={{
            width: "300px",
            marginBottom: '3rem',
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out", // Animação suave
            "&:hover": {
              transform: "scale(1.05)", // Aumenta 5% ao passar o mouse
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Sombra mais intensa no hover
            },
          }}
        >
          {/* Imagem do Card */}
          <CardMedia
            component="img"
            height="200"
            image={card.img}
            alt={card.title}
            sx={{
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          />

          {/* Conteúdo do Card */}
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
              {card.title}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#007bff" }}>
              {card.price}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
              {card.description}
            </Typography>
          </CardContent>

          {/* Botões do Card */}
          <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
           
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default StaticCard;
