import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import mainTheme from './mainTheme';
import RotasService from './services/RotasService';

import Home from './pages/Home';
import CGBotoesContato from './componentes/CGBotoesContato';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <CGBotoesContato></CGBotoesContato>
        <Routes>
          <Route path={RotasService.Internas.PADRAO} element={<Home/>}></Route>
          <Route path="*" element={<Navigate to={RotasService.Internas.PADRAO} replace/>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
