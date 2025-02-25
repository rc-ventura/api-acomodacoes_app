import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, CircularProgress } from "@mui/material";
import IconSection from "../IconSection/IconSection";
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import axios from "axios";
import { Link } from "react-router-dom";

const StaticCard = ({sliceCount}) => {
  
   const [accommodationCards, setAccommodationCards] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] =  useState(null);

    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(()=> {
      axios.get(`${apiUrl}/acomodacoes`).then(response => {
        setAccommodationCards(response.data);
        setError(null);
      })
      .catch(error => {
        console.error(error.message);
        setError("Erro ao buscar acomodações:");
      })
      .finally (()=> {
        setLoading(false);
      })
    }, [apiUrl]);



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "50px",
        marginTop: "10px",
      }}
    >
       {/* 🔹 Se estiver carregando, exibe um spinner */}
       {loading && <CircularProgress sx={{ margin: "auto" }} />}
      
      {/* 🔹 Se houver erro, exibe a mensagem de erro */}
      {error && !loading && (
        <Typography color="error" sx={{ textAlign: "center", width: "100%" }}>
          {error}
        </Typography>
      )}

      {/* 🔹 Se houver dados, exibe os cards */}
      {!loading && !error && accommodationCards.length > 0 &&
        accommodationCards.slice(0, sliceCount).map((card) => (
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
        <Link to={`/acomodacao/${card.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1px" }}>
            {card.title}
            </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.localization} 
          </Typography>
          <Typography variant="h6" sx={{  padding: "2px", fontWeight: "bold", color: "#007bff", marginTop:"30px" }}>
            R$ {card.price} por noite
          </Typography>
        </CardContent>
        </Link>
        {/* Ícones do Card */}
        <IconSection icon={card} />
        </Card>
      
      ))}
    </Box>
  );
};

export default StaticCard;
