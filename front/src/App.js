import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Provider from './store/Provider'
import PrivateRoute from './routes/private/Private';
import Error401 from './pages/401';

function App() {
  return (
    <Router>
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/401" element={<Error401 />} />
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route path="/inicio" element={<Home />} />
            <Route path="/perfil" element={<Home />} />
            <Route path="/meus-anuncios" element={<Home />} />
            <Route path="/anuncios/" element={<Home />} />
            <Route path="/cadastro-anuncio" element={<Home />} />
          </Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
