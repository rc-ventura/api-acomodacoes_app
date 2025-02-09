import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import IconSection from "../../components/IconSection/IconSection";

const AccommodationDetail = () => {
  const [accommodation, setAccommodation] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const { id } = useParams(); 
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/acomodacoes/${id}`)
      .then(response => {
        setAccommodation(response.data);
        setError(null);
      })
      .catch(error => {
        setError("Erro ao carregar os detalhes da acomodação");
        console.error("Erro ao buscar os detalhes:", error);
      });
  }, [apiUrl, id]);

  if (error) {
    return <Typography color="error" sx={{ textAlign: "center", marginTop: 2 }}>{error}</Typography>;
  }

  if (!accommodation) {
    return <Typography sx={{ textAlign: "center", marginTop: 2 }}>Carregando...</Typography>;
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px", padding: "10px" }}>
      <Card
        sx={{
          width: { xs: "100%", sm: "80%", md: "600px" },
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          position: "relative",
          paddingBottom: "20px",
          padding: "20px"
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: "10px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>{accommodation.nome}</Typography>
          <FavoriteButton accommodation={accommodation} sx={{ backgroundColor: "#fff", borderRadius: "50%", padding: "5px", boxShadow: "0px 2px 5px rgba(0,0,0,0.2)" }} />
        </Box>

        <CardMedia
          component="img"
          height="300"
          image={accommodation.imagem}
          alt={accommodation.nome}
          sx={{
            borderRadius: "8px",
            objectFit: "cover",
            width: "100%",
            maxHeight: "300px"
          }}
        />
        
        <CardContent sx={{ paddingBottom: "10px", textAlign: "center" }}>
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#007bff" }}>
            R$ {accommodation.preco_noite} por noite
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
            <strong>Localização:</strong> {accommodation.localizacao}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
            <strong>Descrição:</strong> {accommodation.descricao}
          </Typography>
        </CardContent>

        <IconSection icon={accommodation} sx={{ marginTop: "10px", textAlign: "center" }} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "center", gap: "10px", padding: "10px" }}>
          <Button variant="contained" sx={{ backgroundColor: "#007bff", color: "white", width: { xs: "100%", sm: "auto" } }} onClick={() => navigate(`/acomodacao/${id}`)}>Ver Detalhes</Button>
          <Button variant="contained" sx={{ backgroundColor: "#ff6f61", color: "white", width: { xs: "100%", sm: "auto" } }}>Comparar</Button>
          <Button variant="outlined" sx={{ borderColor: "#ff6f61", color: "#ff6f61", width: { xs: "100%", sm: "auto" } }} onClick={() => navigate(-1)}>Voltar</Button>
        </Box>
      </Card>
    </Box>
  );
};

export default AccommodationDetail;
