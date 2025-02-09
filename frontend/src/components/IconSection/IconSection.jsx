import React from "react";
import { Box, Typography } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import StraightenIcon from "@mui/icons-material/Straighten";

// Componente para exibir ícones e botões
const IconSection = ({ icon }) => {

      
  return (
    <>
      {/* Seção de Ícones */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "6rem",
          color: "#ff6f61",
          padding:"1rem",
          marginBottom:"1rem"
          
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <StraightenIcon  fontSize="small" /> <Typography   color="#333">{icon.area}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <BedIcon fontSize="small" /> <Typography  color="#333">{icon.rooms}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <BathtubIcon fontSize="small" /> <Typography  color="#333">{icon.bathrooms}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <DirectionsCarIcon fontSize="small" /> <Typography  color="#333">{icon.garage}</Typography>
        </Box>
      </Box>

    </>
  );
};

export default IconSection;
