import React from 'react';
import Banner from '../../components/Banner/Banner';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import StaticCard from '../../components/StaticCard/StaticCard';
import TitleSubtitle from '../../components/TitleSubtitle/TitleSubtitle';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TitleSubtitle
                title="Oportunidade de hoje"
                subtitle="Encontre o seu imóvel dos sonhos"
                titleVariant="h2" // Título maior
                subtitleVariant="body2" // Subtítulo menor
                mdMargin="4rem"

            
            />
            <ImageSlider/>
            <TitleSubtitle 
                title="Mais procurados"
                subtitle="Encontre o seu imóvel dos sonhos"
                titleVariant="h2" // Título maior
                subtitleVariant="body2" // Subtítulo menor
                mdMargin="4rem"
            
            />
            
            <StaticCard sliceCount={3}/>
        </div>
    );
};

export default Home;