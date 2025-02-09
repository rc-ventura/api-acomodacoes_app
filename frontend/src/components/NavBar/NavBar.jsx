import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Abre e fecha o menu lateral
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Links do menu
  const navLinks = [
    { path: "/home", label: "Início" },
    { path: "/about", label: "Sobre" },
    { path: "/acomodacoes", label: "Acomodações" },
    { path: "/anunciar", label: "Anunciar" },
    { path: "/contato", label: "Contato" },
  ];

  // Estilos dos links
  const getNavLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: "white",
    padding: "8px 14px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    fontSize: "0.9rem",
    fontWeight: 500,
    cursor: "pointer",
    backgroundColor: isActive ? "#ff6f61" : "transparent",
    boxShadow: isActive ? "inset 2px 2px 5px rgba(0, 0, 0, 0.3)" : "none",
    transform: isActive ? "scale(0.95)" : "scale(1)",
    "&:hover": {
      backgroundColor: "#FFA07A",
      transform: "scale(1.05)",
    },
  });

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        width: "100%", // 🔥 Garante que ocupa a tela toda
        backgroundColor: "#333", 
        height: "4rem",
        left: 0, // 🔥 Corrige possíveis deslocamentos
        right: 0, // 🔥 Evita scroll horizontal
      }}
    > 
      <Box sx={{ width: "100%", paddingX: 0 }}> {/* 🔥 Remove margens laterais */}
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          height: "100%", 
          width: "100%", // 🔥 Garante que o conteúdo ocupa a largura total
        }}>
          
          {/* Logo */}
          <Typography variant="h6" sx={{
            fontSize: { xs: "24px", sm: "28px", md: "32px" },
            display: "flex",
            alignItems: "center"
          }}>
            <NavLink to="/" style={{ ...getNavLinkStyle({ isActive: false }), fontSize: "1.5rem" }}>🏠</NavLink> 
          </Typography>

          {/* Menu Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "15px" }}>
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} style={getNavLinkStyle}>
                {link.label}
              </NavLink>
            ))}
          </Box>

          {/* Ícone de Menu (Mobile) */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "white", padding: "5px" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ fontSize: "28px" }} />
          </IconButton>

          {/* Drawer - Menu Mobile */}
          <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
            <Box sx={{ width: 220, backgroundColor: "#333", height: "100vh", color: "white" }}>
              
              {/* Ícone de Fechar */}
              <IconButton onClick={handleDrawerToggle} sx={{ color: "white", margin: "8px" }}>
                <CloseIcon sx={{ fontSize: "26px" }} />
              </IconButton>

              {/* Links do Menu */}
              <List>
                {navLinks.map((link) => (
                  <ListItem button key={link.path} component={NavLink} to={link.path} onClick={handleDrawerToggle}>
                    <ListItemText primary={link.label} sx={{ color: "white", textAlign: "center" }} />
                  </ListItem>
                ))}
              </List>

            </Box>
          </Drawer>

        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default NavBar;
