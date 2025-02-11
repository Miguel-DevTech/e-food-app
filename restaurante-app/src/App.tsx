import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importando React Router
import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/MainPage/MainPage';
import CategoryPage from './pages/CategoryPages/CategoryPage.tsx';
import './mainStyles/App.css';

function App() {
  return (
    <Router>
      {/* Componente de navegação */}
      <NavBar />

      {/* Definição das rotas */}
      <Routes>
          <Route path="/" 
          element={<MainPage />} 
        /> {/* Página principal com os cards */}

          <Route path="/categoria/:category" 
          element={<CategoryPage />} 
        /> {/* Página da categoria */}

      </Routes>
    </Router>
  );
}

export default App;
