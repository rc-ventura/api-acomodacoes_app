import React from 'react';
import { Typography, Box } from '@mui/material';

const TitleSubtitle = ({ 
  title, 
  subtitle, 
  titleVariant,  
  subtitleVariant
}) => {
  return (
    <Box 
      sx={{ 
        textAlign: { xs: "center", sm: "center", md: "left" }, 
        marginLeft: { xs: "auto", sm: "auto", md: "5rem" }, 
        marginRight: { xs: "auto", sm: "auto", md: "0" }, 
        marginTop: { xs: "1rem", sm: "1rem", md: "3rem" }, //  Reduzido para telas pequenas
        marginBottom: "3rem",
        maxWidth: { xs: "95%", sm: "85%", md: "60%" }, 
        padding: { xs: "5px", sm: "15px", md: "0px" }, //  Menos padding em telas pequenas
      }}
    >
      {/* Título ajustado para iPhone SE */}
      <Typography 
        variant={titleVariant} 
        sx={{ 
          fontWeight: 'bold', 
          fontSize: { 
            xs: "1.8rem", //  Reduzido para iPhone SE
            sm: "2.8rem", 
            md: "3rem" ,
          },
          color: '#ff6f61',
          overflowWrap: "break-word", 
          textAlign: { xs: "center", md: "left" }, 
        }}
      >
        {title}
      </Typography>
        
      {/* Subtítulo ajustado para telas */}
      <Typography 
        variant={subtitleVariant} 
        sx={{ 
          fontSize: { 
            xs: "1rem", // 🔥 Menor para iPhone SE
            sm: "1.2rem", 
            md: "1.5rem" 
            
          },
          color: '#555',
          overflowWrap: "anywhere", 
          maxWidth: "100%", 
          textAlign: { xs: "center", md: "left" }, 
          padding: { xs: "5px", sm: "10px", md: "0px" }, 
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default TitleSubtitle;
