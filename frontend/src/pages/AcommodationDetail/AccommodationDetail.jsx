import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './AccommodationDetail.module.css'; // Importando os estilos como um módulo
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
  }, [apiUrl, id]);

  if (error) {
    return <p className={styles.errorMessage}>{error}</p>;
  }

  if (!accommodation) {
    return <p className={styles.loadingMessage}>Carregando...</p>;
  }

  return (
    <div className={styles.accommodationDetailContainer}>
      <h1 className={styles.accommodationTitle}>{accommodation.nome}</h1>
      <div className={styles.accommodationDetail}>
        <img src={accommodation.imagem} alt={accommodation.nome} className={styles.accommodationImage} />
        
        <div className={styles.accommodationInfo}>
          <p><strong>Localização:</strong> {accommodation.localizacao}</p>
          <p className={styles.price}><strong>Preço:</strong> R$ {accommodation.preco_noite} por noite</p>
          <p className={styles.description}><strong>Descrição:</strong> {accommodation.descricao}</p>
          <FavoriteButton accommodation={accommodation} />
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetail;
