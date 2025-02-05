import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import SearchInput from "../../components/SearchInput/SearchInput";
import DynamicPageTitle from "../../components/DynamicPageTitle/DynamicPageTitle";
import styles from "./AccommodationList.module.css"; // Importando estilos

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
        <div className={styles.accommodationsContainer}> {/* Usando CSS Module */}

            <DynamicPageTitle/>
            
            <SearchInput 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                onSearch={handleSearch} 
                />

            {error && <p className={styles.error}>{error}</p>}
            {filteredAccommodations.length === 0 && !error && <p className={styles.noResults}>Nenhuma acomodação encontrada.</p>}

            <div className={styles.accommodationGrid}>
                
                {filteredAccommodations.map((acc) => (
                    <div key={acc.id} className={styles.accommodationCard}>
                       
                        <Link to={`/acomodacao/${acc.id}`} className={styles.imageLink}>
                            <img src={acc.imagem} alt={acc.nome} className={styles.accommodationImage} />
                        </Link>

                        <div className={styles.accommodationInfo}>
                            <h3>{acc.nome}</h3>
                            <p className={styles.location}>{acc.localizacao}</p>
                            <p className={styles.price}>R$ {acc.preco_noite} por noite</p>
                           
                            <FavoriteButton accommodation={acc} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccommodationList;
