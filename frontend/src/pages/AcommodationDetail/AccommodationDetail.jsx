import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./AccommodationDetail.css"; // Importando o CSS
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';

const AccommodationDetail = () => {
  const [accommodation, setAccommodation] = useState(null);
  const [error, setError] = useState(null);
  
  const { id } = useParams(); 

// A URL da API agora vem da variável de ambiente
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
  }, [apiUrl,id]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!accommodation) {
    return <p className="loading-message">Carregando...</p>;
  }

  return (
    <div className="accommodation-detail-container">
      <h1 className="accommodation-title">{accommodation.nome}</h1>
      
      <div className="accommodation-detail">
        <img src={accommodation.imagem} alt={accommodation.nome} className="accommodation-image" />
        
        <div className="accommodation-info">
          <p><strong>Localização:</strong> {accommodation.localizacao}</p>
          <p className="price"><strong>Preço:</strong> R$ {accommodation.preco_noite} por noite</p>
          <p className="description"><strong>Descrição:</strong> {accommodation.descricao}</p>
          <FavoriteButton accommodation={accommodation} />
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetail;
