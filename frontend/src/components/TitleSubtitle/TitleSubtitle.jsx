import React from 'react';
import { Typography, Box } from '@mui/material';

const TitleSubtitle = ({ 
        title, 
        subtitle, 
        titleVariant,  
        subtitleVariant }) => {
          
  return (
    <Box sx={{ textAlign: 'left', marginLeft: '5rem', marginTop: '4rem', marginBottom: '3rem' }}>
      {/* Título */}
      <Typography 
        variant={titleVariant} 
        sx={{ fontWeight: 'bold', 
              fontSize: '2.5rem', 
               color: '#ff6f61' }}>
        {title}
      </Typography>

      {/* Subtítulo */}
      <Typography variant={subtitleVariant} sx={{ fontSize: '1.25rem', color: '#555' }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default TitleSubtitle;
