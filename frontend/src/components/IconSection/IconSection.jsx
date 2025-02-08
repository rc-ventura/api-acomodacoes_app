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
          marginTop: "8rem",
          color: "#ff6f61",
          
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <StraightenIcon fontSize="small" /> <Typography color="#333">{icon.area}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <BedIcon fontSize="small" /> <Typography color="#333">{icon.rooms}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <BathtubIcon fontSize="small" /> <Typography color="#333">{icon.bathrooms}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <DirectionsCarIcon fontSize="small" /> <Typography color="#333">{icon.garage}</Typography>
        </Box>
      </Box>

    </>
  );
};

export default IconSection;
