import { Box, ThemeProvider } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import mainTheme from './mainTheme';
import RotasService from './services/RotasService';

import Home from './pages/Home';
import CGBotoesContato from './componentes/CGBotoesContato';
import CGBottomNavigation from './componentes/CGBottomNavigation';
import Noticias from './pages/Noticias';
import FaleComigo from './pages/FaleComigo';
import Pautas from './pages/Pautas';

const App = () => {
  
  const estiloDeApresentacao = {
      pb: { xs: 10, sm: 8, md: 10 },
      px: { xs: 2, sm: 8, md: 12 },
      py: 4, backgroundColor: 'secondary.light'
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Box sx={estiloDeApresentacao}>
          <Routes>
            <Route path={RotasService.Internas.HOME} element={<Home/>}></Route>
            <Route path={RotasService.Internas.NOTICIAS} element={<Noticias/>}></Route>
            <Route path={RotasService.Internas.FALE_COMIGO} element={<FaleComigo/>}></Route>
            <Route path={RotasService.Internas.PAUTAS} element={<Pautas/>}></Route>
            <Route path="*" element={<Navigate to={RotasService.Internas.HOME} replace/>}></Route>
          </Routes>
          <CGBotoesContato></CGBotoesContato>
        </Box>
        <CGBottomNavigation/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
