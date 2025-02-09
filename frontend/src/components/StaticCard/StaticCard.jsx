import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import IconSection from "../IconSection/IconSection";
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const StaticCard = () => {
  
    const cardData = [
    { 
       id: 1,
      img: "https://picsum.photos/300/200?1",
      title: "Loft Industrial",
      price: "R$ 500.000",
      description: "Loft moderno com design industrial, pé-direito alto e conceito aberto.",
        rooms: 3,
        bathrooms: 2,
        garage: 1,
        area: "150 m²"
    },
    {
      id: 2,
      img: "https://picsum.photos/300/200?2",
      title: "Mansão Exclusiva",
      price: "R$ 3.500.000",
      description: "Mansão de luxo com piscina, spa e amplo jardim em bairro nobre.",
        rooms: 5,
        bathrooms: 4,
        garage: 3,
        area: "500 m²"
    },
    {
      id: 3,
      img: "https://picsum.photos/300/200?3",
      title: "Apartamento Compacto",
      price: "R$ 250.000",
      description: "Apartamento pequeno, funcional e bem localizado para quem busca praticidade.",
        rooms: 1,
        bathrooms: 1,
        garage: 1,
        area: "62 m²"
    },
    {
        id:4,
      img: "https://picsum.photos/300/200?4",
      title: "Residência Contemporânea",
      price: "R$ 800.000",
      description: "Casa com arquitetura moderna, iluminação natural e tecnologia sustentável.",
        rooms: 2,
        bathrooms: 2,
        garage: 2,
        area: "100 m²"
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
      {cardData.slice(0,3).map((card) => (
        <Card
          key={card.id}
          sx={{
            width: "300px",
            marginBottom: '3rem',
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            },
            position: "relative", // Permite sobreposição dentro do Card
          }}
        >   

        {/* Imagem e elementos sobrepostos */}
        <Box sx={{ position: "relative" }}>
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
          
          {/* 🔥 Área sobreposta contendo o código, botão de comparar e favoritos */}
          <Box sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            right: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Fundo escuro semi-transparente
            color: "white",
            borderRadius: "8px",
            padding: "5px 10px",
          }}>
            <Typography variant="body2">Cod: {card.id}</Typography>
            <Button variant="contained" size="small" sx={{ backgroundColor: "#ff6f61", color: "white", fontSize: "0.7rem" }}>
              Comparar
            </Button>
            <FavoriteButton accommodation={card} />
          </Box>
        </Box>

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

        {/* Ícones do Card */}
        <IconSection icon={card} />
        </Card>
      ))}
    </Box>
  );
};

export default StaticCard;
