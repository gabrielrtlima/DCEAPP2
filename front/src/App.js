import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Provider from './store/Provider'
import PrivateRoute from './routes/private/Private';

import Home from './pages/Home'
import Error401 from './pages/401';
import Login from './pages/Login'
import Cadastro from './pages/Cadastro';
import AnunciosPage from './pages/Anuncios';
import Inicio from './pages/Inicio';
import CriarAnuncio from './pages/CriarAnuncio';
import Admin from './pages/Admin/index';

function App() {
  return (
    <Router>
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/401" element={<Error401 />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/admin" element={<Admin />} />
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route path="/anuncios/" element={<AnunciosPage />} />
            <Route path="/perfil" element={<Home />} />
            <Route path="/meus-anuncios" element={<Home />} />
            <Route path="/criar-anuncio" element={<CriarAnuncio />} />
          </Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
