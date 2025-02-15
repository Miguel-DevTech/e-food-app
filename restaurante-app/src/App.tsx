import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importando React Router
import { OrderProvider } from './context/OrderContext.tsx';
import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/MainPage/MainPage';
import CategoryPage from './pages/CategoryPage/CategoryPage.tsx';
import OrderPage from './pages/OrderPage/OrderPage.tsx';
import './mainStyles/App.css';

function App() {
  return (
    <OrderProvider>
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

          <Route path='/pedidos' 
          element={<OrderPage />}  
        /> {/* Página de pedidos*/}

      </Routes>
    </Router>
    </OrderProvider>
  );
}

export default App;
