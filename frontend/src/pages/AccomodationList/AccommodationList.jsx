import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AccommodationList.css";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";


const AccommodationList = () => {
    const [accommodations, setAccommodations] = useState([]);
    const [filteredAccommodations, setFilteredAccommodations] = useState([]);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");

 // A URL da API agora vem da variável de ambiente
 const apiUrl = process.env.REACT_APP_API_URL;

    // Carrega todas as acomodações ao iniciar a página
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

    // Função para filtrar acomodações localmente
    const handleSearch = () => {
        const formattedCity = city.trim().toLowerCase();

        if (formattedCity === "") {
            setFilteredAccommodations(accommodations); // Exibe todas as acomodações
            setError(null);
            return;
        }

        const filtered = accommodations.filter(acc =>
            acc.localizacao.toLowerCase().includes(formattedCity)
        );

        if (filtered.length === 0) {
            setError("Nenhuma acomodação encontrada.");
        } else {
            setError(null);
        }

        setFilteredAccommodations(filtered);
    };

    return (
        <div className="accommodations-container">
            <h1>Acomodações Disponíveis</h1>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Filtrar por cidade"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>

            {error && <p className="error">{error}</p>}
            {filteredAccommodations.length === 0 && !error && <p className="no-results">Nenhuma acomodação encontrada.</p>}

            <div className="accommodation-grid">
                {filteredAccommodations.map((acc) => (
                    <div key={acc.id} className="accommodation-card">
                        <Link to={`/acomodacao/${acc.id}`} className="image-link">
                            <img src={acc.imagem} alt={acc.nome} className="accommodation-image" />
                        </Link>
                        <div className="accommodation-info">
                            <h3>{acc.nome}</h3>
                            <p className="location">{acc.localizacao}</p>
                            <p className="price">R$ {acc.preco_noite} por noite</p>
                            <FavoriteButton accommodation={acc} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccommodationList;
