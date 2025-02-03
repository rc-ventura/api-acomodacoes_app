import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"; // Importando estilos


const NavBar = () => {
  // Função para definir a classe do link dinamicamente
  const getNavLinkClass = ({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#333" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ position: "absolute", left: "20px", fontSize: { xs: "20px", sm: "30px", md: "40px" }, display: { xs: "none", sm: "block" } }}>
            <NavLink to="/" className={getNavLinkClass}>🏠</NavLink>
          </Typography>

          {/* Menu Centralizado */}
          <div className={styles.navLinks}>
            {["/home", "/acomodacoes", "/contato"].map((path, index) => (
              <NavLink key={index} to={path} className={getNavLinkClass}>
                {path === "/home" ? "Início" : path === "/acomodacoes" ? "Acomodações" : "Contato"}
              </NavLink>
            ))}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
