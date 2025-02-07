import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
      
      {/* Logo e Informações da Empresa */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant="h6">Imobiliária Wolf</Typography>
        <Typography variant="body2">CRECI: 5071J</Typography>
        <Typography variant="body2">(48) 32490047</Typography>
        <Typography variant="body2">(48) 99671-1717</Typography>
        <Typography variant="body2">contato@imobiliariawolf.com.br</Typography>
        <Typography variant="body2">Rua Afonso Pena, 372, Florianópolis - SC</Typography>
      </Box>

      {/* Navegação */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6">Navegação rápida</Typography>
        <Typography variant="body2">Home</Typography>
        <Typography variant="body2">Sobre nós</Typography>
        <Typography variant="body2">Buscar imóvel</Typography>
        <Typography variant="body2">Anunciar imóvel</Typography>
        <Typography variant="body2">Contato</Typography>
        <Typography variant="body2">FAQ</Typography>
        <Typography variant="body2">Política de privacidade</Typography>
      </Box>

      {/* Redes sociais */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <Typography variant="h6">Sobre nós</Typography>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </Box>
      </Box>

    </Box>
  );
};

export default Footer;
