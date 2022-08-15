import { Email, Favorite, Home, LocationOn, MenuBook, Newspaper, Restore } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RotasService from "../services/RotasService";

const CGBottomNavigation = () => {
    const value = useState(RotasService.Internas.HOME);
    const navegarPara = useNavigate();

    const estiloBottomNavigation = { 
      position: 'fixed', bottom: 0, 
      left: 0, right: 0, zIndex: 3
    };

    return (
        <Paper sx={estiloBottomNavigation} elevation={5}>
          <BottomNavigation
            sx={{backgroundColor: '#5757d692', borderTop: '1px inset #8282ed92'}}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              navegarPara(newValue);
            }}
          >
            <BottomNavigationAction value={RotasService.Internas.PAUTAS} label="Pautas" icon={<MenuBook />} />
            <BottomNavigationAction value={RotasService.Internas.HOME} label="Home" icon={<Home />} />
            {/*<BottomNavigationAction value={RotasService.Internas.FALE_COMIGO} label="Fale Comigo" icon={<Email />} />*/}
            <BottomNavigationAction value={RotasService.Internas.NOTICIAS} label="Notícias" icon={<Newspaper />} />
        </BottomNavigation>
      </Paper>
    );
}

export default CGBottomNavigation;