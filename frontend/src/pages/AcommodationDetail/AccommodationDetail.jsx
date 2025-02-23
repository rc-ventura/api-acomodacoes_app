import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
//import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
//import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
//import IconSection from "../../components/IconSection/IconSection";
import { Box, Card, Button, Grid2, CardMedia, Stack, Typography, Avatar, TextField } from "@mui/material";
import TitleSubtitle from '../../components/TitleSubtitle/TitleSubtitle';
import StaticCard from '../../components/StaticCard/StaticCard';

const AccommodationDetail = () => {
  const [accommodation, setAccommodation] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  //const navigate = useNavigate();

  
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

const images = React.useMemo(() => accommodation?.imagem 
  // 🔹 Criar um array de imagens (simulado por enquanto)
  ? [
      accommodation.imagem,
      `${accommodation.imagem}?v=1`, // Variação para testes
      `${accommodation.imagem}?v=2`,
      `${accommodation.imagem}?v=3`,
      `${accommodation.imagem}?v=4`,
      `${accommodation.imagem}?v=5`,
      `${accommodation.imagem}?v=6`,

    ]
  : [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400/ff7f7f",
      "https://via.placeholder.com/600x400/77ff77",
      "https://via.placeholder.com/600x400/7777ff",
    ], [accommodation]);

  // 🔹 Definir a imagem inicial apenas após os dados carregarem
  useEffect(() => {
    if (accommodation?.imagem) {
      setSelectedImage(accommodation.imagem);
    } else {
      setSelectedImage(images[0]);
    }
  }, [accommodation, images]);

  if (error) {
    return <Typography color="error" sx={{ textAlign: "center", marginTop: 2 }}>{error}</Typography>;
  }

  if (!accommodation) {
    return <Typography sx={{ textAlign: "center", marginTop: 2 }}>Carregando...</Typography>;
  }

  return (


    <Box sx={{ padding: "20px", maxWidth: "1200px", mx: "auto" }}>
      {/* 🔹 Grid com duas colunas */}
      <Grid2 container spacing={2} alignItems='flex-start'>
        
        {/* 📌 Coluna Esquerda (Imagens e Informações) */}
        <Grid2 item xs={12} md={5} sx={{ paddingLeft: 1, mx: 1, display: "flex", flexDirection: "column", gap: 2.5 }}>
        {/* Nome e Localização */}
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "-10px" }}>
            {accommodation.nome}
          </Typography>
          <Typography variant="body1" color="text.secondary" >
            <strong>Localização:</strong> {accommodation.localizacao}
          </Typography>

          {/* Imagem Principal */}
          <Card sx={{ width: "100%", boxShadow: 3, mt: 2 }}>
            <CardMedia
              component="img"
              image={selectedImage}
              alt="Imagem Principal"
              sx={{ width: "100%", height: 400, borderRadius: 2 }}
            />
          </Card>

          {/* Miniaturas */}
          <Stack direction="row" spacing={2} sx={{ overflowX: "auto", p: 1, mt: 2 }}>
            {images.map((image, index) => (
              <Card
                key={index}
                sx={{
                  width: 80,
                  height: 80,
                  cursor: "pointer",
                  border: selectedImage === image ? "2px solid #ff6f61" : "none",
                  transition: "0.3s",
                }}
                onClick={() => setSelectedImage(image)}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Thumbnail ${index}`}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Card>
            ))}
          </Stack>

          {/* Containers Brancos para Descrição, Informações e Mapa */}
          <Card sx={{ width: "100%", borderRadius: "8px", padding: 2, mt: 2, boxShadow: 2 }}>
            <Typography variant="h6"sx={{marginBottom:2}}>Descrição</Typography>
            <Typography variant="body2">{accommodation.descricao}</Typography>
          </Card>

          <Card sx={{ width: "100%", borderRadius: "8px", padding: 2, mt: 2, boxShadow: 2 }}>
            <Typography variant="h6"sx={{marginBottom:2}}>Mais Informações</Typography>
            <Typography variant="body2">{accommodation.outra_info || "Informações adicionais sobre a acomodação."}</Typography>
          </Card>

          <Card sx={{ width: "100%", borderRadius: "8px", padding: 2, mt: 2, boxShadow: 2 }}>
            <Typography variant="h6">Mapa da Localização</Typography>
            <CardMedia
              component="img"
              image="https://via.placeholder.com/600x300?text=Mapa+da+Localização"
              alt="Mapa da Localização"
              sx={{ width: "100%", height: 300, borderRadius: 2 }}
            />
          </Card>

          {/* Título e Cards de Imóveis Semelhantes (Agora em linha) */}
          <TitleSubtitle 
            title="Imóveis Semelhantes" 
            subtitle="Confira imóveis que você vai gostar" 
            titleVariant="h2" sx={{  mt: 3 }} />

          </Grid2>
          {/* <Grid2 container spacing={2} sx={{ mt: 2 }}>
            <Grid2 item xs={6} sm={4}>
              <StaticCard />
            </Grid2>
          </Grid2>
        </Grid2> */}

        {/* 📌 Coluna Direita (Detalhes) */}
        {/* 📌 Coluna Direita (Detalhes - Mantendo o preço no topo) */}
        <Grid2 
          item 
          xs={12} 
          md={5}  
          sx={{ 
               paddingLeft: 2, 
              display: "flex", 
              flexDirection: "column", 
              gap: 2, 
              maxWidth: { xs:"100%", md: "30%"},
              flexShrink: 1,
              flexBasis: 'auto',
              flexGrow: 1,
              minWidth: 0,
              overflow: "hidden" 
            }}
              >
          <Typography variant="h5" sx={{ padding: '1rem', fontWeight: "bold", color: "#ff6f61", alignSelf: "flex-end", marginBottom: "2rem" }}>
            R$ {accommodation.preco_noite} por noite
          </Typography>

           {/* Botões de ação */}
           <Stack direction="row" spacing={2}  justifyContent="center">
            <Button variant="contained" sx={{ width: '50%', backgroundColor: "#ff6f61", color: "white" }}>
              Reservar
            </Button>
            <Button variant="outlined" sx={{  width: '50%', borderColor: "#ff6f61", color: "#ff6f61" }}>
              Comparar
            </Button>
          </Stack>

          {/* Formulário de Contato */}
          <Card sx={{ width: "100%", maxWidth: "100%",  padding: 3, borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>
              Proposta
            </Typography>
            <Typography 
                variant="body2" 
                 sx={{   
                      overflowWrap: "break-word" , 
                      width: "100%", 
                      maxWidth: '100%', 
                      wordBreak: "break-word",
                      flexShrink: 1 }}  >
              Preencha os campos para que um de nossos especialistas entre em contato
            </Typography>
            <Typography variant="h6" gutterBottom>
              
            </Typography>
            <Stack spacing={2}>
              <TextField label="Nome" variant="outlined" fullWidth sx={{minWidth: 0}} />
              <TextField label="E-mail" variant="outlined" fullWidth sx={{minWidth: 0}} />
              <TextField label="Telefone" variant="outlined" fullWidth sx={{minWidth: 0}} />
              <TextField label="Dúvidas" variant="outlined" sx={{minWidth: 0}} fullWidth multiline rows={4} />
              <Button variant="contained" sx={{ backgroundColor: "#ff6f61", color: "white" }}>
                Enviar
              </Button>
            </Stack>
          </Card>

          {/* Informações do Corretor */}
          <Card sx={{ padding: 3, borderRadius: 2, boxShadow: 2, display: "flex", alignItems: "center", gap: 2 }}>
            
            <Avatar src="https://via.placeholder.com/100" sx={{ width: 60, height: 60 }} />
            <Box>
              <Typography sx={{margin: 2}} variant="h6">Corretor</Typography>
              <Typography variant="h6">Ventura imobiliária</Typography>
              <Typography variant="body1">Carlos Silva</Typography>

              <Typography variant="body2">Código: 12345</Typography>
              <Typography variant="body2">Telefone: (11) 99999-9999</Typography>
              <Typography variant="body2">Email: carlos@email.com</Typography>
            </Box>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
};




  //   <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px", padding: "10px" }}>
  //     <Card
  //       sx={{
  //         width: { xs: "100%", sm: "80%", md: "600px" },
  //         borderRadius: "8px",
  //         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  //         position: "relative",
  //         paddingBottom: "20px",
  //         padding: "20px"
  //       }}
  //     >
  //       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: "10px" }}>
  //         <Typography variant="h6" sx={{ fontWeight: "bold" }}>{accommodation.nome}</Typography>
  //         <FavoriteButton accommodation={accommodation} sx={{ backgroundColor: "#fff", borderRadius: "50%", padding: "5px", boxShadow: "0px 2px 5px rgba(0,0,0,0.2)" }} />
  //       </Box>

  //       <CardMedia
  //         component="img"
  //         height="300"
  //         image={accommodation.imagem}
  //         alt={accommodation.nome}
  //         sx={{
  //           borderRadius: "8px",
  //           objectFit: "cover",
  //           width: "100%",
  //           maxHeight: "300px"
  //         }}
  //       />
        
  //       <CardContent sx={{ paddingBottom: "10px", textAlign: "center" }}>
  //         <Typography variant="body1" sx={{ fontWeight: "bold", color: "#007bff" }}>
  //           R$ {accommodation.preco_noite} por noite
  //         </Typography>
  //         <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
  //           <strong>Localização:</strong> {accommodation.localizacao}
  //         </Typography>
  //         <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
  //           <strong>Descrição:</strong> {accommodation.descricao}
  //         </Typography>
  //       </CardContent>

  //       <IconSection icon={accommodation} sx={{ marginTop: "10px", textAlign: "center" }} />

  //       <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "center", gap: "10px", padding: "10px" }}>
  //         <Button variant="contained" sx={{ backgroundColor: "#007bff", color: "white", width: { xs: "100%", sm: "auto" } }} onClick={() => navigate(`/acomodacao/${id}`)}>Ver Detalhes</Button>
  //         <Button variant="contained" sx={{ backgroundColor: "#ff6f61", color: "white", width: { xs: "100%", sm: "auto" } }}>Comparar</Button>
  //         <Button variant="outlined" sx={{ borderColor: "#ff6f61", color: "#ff6f61", width: { xs: "100%", sm: "auto" } }} onClick={() => navigate(-1)}>Voltar</Button>
  //       </Box>
  //     </Card>
  //   </Box>
  


export default AccommodationDetail;
