import React, { useState, useEffect } from 'react';
import './FavoriteButton.css';

const FavoriteButton = ({ accommodation }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    // Verifica se a acomodação já foi favoritada ao carregar o componente
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.includes(accommodation.id)) {
            setIsFavorited(true);
        }
    }, [accommodation.id]);

    // Função para favoritar/desfavoritar
    const handleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (isFavorited) {
            // Remove o ID da acomodação dos favoritos
            const updatedFavorites = favorites.filter(id => id !== accommodation.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorited(false);
        } else {
            // Adiciona o ID da acomodação aos favoritos
            favorites.push(accommodation.id);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorited(true);
        }
    };

    return (
        <button className={`favorite-button ${isFavorited ? 'favorited' : ''}`} onClick={handleFavorite}>
            {isFavorited ? '❤️ Favoritado' : '🤍 Favoritar'}
        </button>
    );
};

export default FavoriteButton;