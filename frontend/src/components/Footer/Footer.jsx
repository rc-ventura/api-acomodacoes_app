import { Box, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: "center", 
        padding: '30px', 
        backgroundColor: '#333', 
        color: 'white', 
        textAlign: "center",
        width: "100%", // 🔥 Garante que não ultrapasse a página
        boxSizing: "border-box",
      }}
    >
      
      {/* Seção Principal do Footer */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'center', 
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          flexWrap: 'wrap',
          gap: "50px", // 🔥 Espaço entre colunas
        }}
      >
        
        {/* Logo e Informações da Empresa */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, gap: 1 }}>
          <Typography variant="h4">🏠</Typography>
          <Typography variant="h6">Imobiliária Ventura</Typography>
          <Typography variant="body2">CRECI: 1004F</Typography>
          <Typography variant="body2">(48) 99165-0047</Typography>
          <Typography variant="body2">(48) 99156-1717</Typography>
          <Typography variant="body2">contato@imobiliariaventura.com.br</Typography>
          <Typography variant="body2">Rua dos Venturas, 372, Florianópolis - SC</Typography>
        </Box>

        {/* Container para as duas colunas centralizadas */}
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: { xs: "row", md: "row" }, 
            justifyContent: "center",
            alignItems: "center", 
            gap: "2rem", // 🔥 Maior espaço entre colunas
            width: "100%",
            maxWidth: "600px", // 🔥 Evita que as colunas se espalhem muito
          }}
        >
          
          {/* Navegação Rápida */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", gap: 1, minWidth: "150px" }}>
            <Typography 
              variant="h6" 
              sx={{ whiteSpace: "nowrap", marginBottom: "8px", fontSize: "1.1rem" }} // 🔥 Evita quebra de linha
            >
              Navegação Rápida
            </Typography>
            <Typography variant="body2" sx={{ cursor: 'pointer', "&:hover": { color: "#FFA07A" } }}>Home</Typography>
            <Typography variant="body2" sx={{ cursor: 'pointer', "&:hover": { color: "#FFA07A" } }}>Sobre nós</Typography>
            <Typography variant="body2" sx={{ cursor: 'pointer', "&:hover": { color: "#FFA07A" } }}>Buscar imóvel</Typography>
            <Typography variant="body2" sx={{ cursor: 'pointer', "&:hover": { color: "#FFA07A" } }}>Anunciar imóvel</Typography>
          </Box>

          {/* Suporte ao Cliente */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", gap: 1, minWidth: "150px" }}>
            <Typography 
              variant="h6" 
              sx={{ whiteSpace: "nowrap", marginBottom: "8px", fontSize: "1.1rem" }} // 🔥 Mantém título em uma linha
            >
              Suporte ao Cliente
            </Typography>
            <Typography variant="body2" sx={{ cursor: 'pointer', "&:hover": { color: "#FFA07A" } }}>Contato</Typography>
            <Typography variant="body2" sx={{ cursor: 'pointer', "&:hover": { color: "#FFA07A" } }}>Favoritos</Typography>
            <Typography variant="body2" sx={{ cursor: 'pointer', "&:hover": { color: "#FFA07A" } }}>FAQ</Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                cursor: 'pointer', 
                "&:hover": { color: "#FFA07A" }, 
                whiteSpace: "nowrap" // 🔥 Agora não quebra a linha
              }}
            >
              Política de Privacidade
            </Typography>
          </Box>

        </Box>

        {/* Redes Sociais com Ícones */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", gap: 1 }}>
          <Typography variant="h6">Redes Sociais</Typography>
          <Box sx={{ display: 'flex', gap: '15px', marginTop: "5px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook sx={{ fontSize: 30, color: "#1877F2", "&:hover": { color: "#125699" } }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram sx={{ fontSize: 30, color: "#E4405F", "&:hover": { color: "#C13584" } }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter sx={{ fontSize: 30, color: "#1DA1F2", "&:hover": { color: "#0C85D0" } }} />
            </a>
          </Box>
        </Box>

      </Box>

      {/* Linha de Separação */}
      <Box sx={{ width: "100%", maxWidth: "1200px", borderTop: "1px solid #555", marginTop: "20px", paddingTop: "10px" }} />

      {/* Texto Inferior - Desenvolvido por Ventura */}
      <Typography variant="body2" sx={{ marginTop: "10px", fontSize: "0.9rem" }}>
        Desenvolvido por <a href="https://seusite.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FFA07A", textDecoration: "none", fontWeight: "bold" }}>Ventura</a>
      </Typography>

    </Box>
  );
};

export default Footer;
