import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import SearchInput from "../../components/SearchInput/SearchInput";
import IconSection from "../../components/IconSection/IconSection";

const AccommodationList = () => {
    const [accommodations, setAccommodations] = useState([]);
    const [filteredAccommodations, setFilteredAccommodations] = useState([]);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");

    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${apiUrl}/acomodacoes`)
            .then(response => {
                setAccommodations(response.data);
                setFilteredAccommodations(response.data);
                setError(null);
            })
            .catch(error => {
                console.error("Erro ao buscar acomodações:", error);
                setError("Erro ao buscar acomodações.");
            });
    }, [apiUrl]);

    const handleSearch = () => {
        const formattedCity = city.trim().toLowerCase();

        if (formattedCity === "") {
            setFilteredAccommodations(accommodations);
            setError(null);
            return;
        }

        const filtered = accommodations.filter(acc =>
            acc.localizacao.toLowerCase().includes(formattedCity)
        );

        setError(filtered.length === 0 ? "Nenhuma acomodação encontrada." : null);
        setFilteredAccommodations(filtered);
    };

    return (
        <Box sx={{ padding: "20px" }}>
            <SearchInput 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                onSearch={handleSearch} 
            />

            {error && <Typography color="error" sx={{ textAlign: "center", marginTop: 2 }}>{error}</Typography>}
            {filteredAccommodations.length === 0 && !error && (
                <Typography sx={{ textAlign: "center", marginTop: 2 }}>Nenhuma acomodação encontrada.</Typography>
            )}

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", marginTop: "20px" }}>
                {filteredAccommodations.map((acc) => (
                    <Card
                        key={acc.id}
                        sx={{
                            width: "300px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": {
                                transform: "scale(1.05)",
                                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                            },
                            position: "relative",
                        }}
                    >
                            <Box sx={{ position: "relative" }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={acc.imagem}
                                    alt={acc.nome}
                                    sx={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "10px",
                                        left: "10px",
                                        right: "10px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                                        color: "white",
                                        borderRadius: "8px",
                                        padding: "5px 10px",
                                        
                                    }}
                                >
                                    <Typography variant="body2">Cod: {acc.id}</Typography>
                                    <Button variant="contained" size="small" sx={{ backgroundColor: "#ff6f61", color: "white", fontSize: "0.7rem" }}>
                                        Comparar
                                    </Button>
                                    <FavoriteButton accommodation={acc} />
                                </Box>
                            </Box>
                            <Link to={`/acomodacao/${acc.id}`} style={{ textDecoration: "none", color: "inherit" }}>

                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                                    {acc.nome}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ marginTop: "10px" }}>
                                    {acc.localizacao}
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#007bff", marginTop:"1rem"}}>
                                    R$ {acc.preco_noite} por noite
                                </Typography>
                            </CardContent>
                            </Link>
                        <IconSection icon={acc} />
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default AccommodationList;
