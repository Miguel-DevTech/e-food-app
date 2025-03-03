import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importando React Router
import { OrderProvider } from './context/OrderContext.tsx';
import { ToastProvider } from './context/ToastContext/ToastContext.tsx';
import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/MainPage/MainPage';
import CategoryPage from './pages/CategoryPage/CategoryPage.tsx';
import OrderPage from './pages/OrderPage/OrderPage.tsx';
import './mainStyles/App.css';
import MenuPage from './pages/MenuPage/MenuPage.tsx';

function App() {
    return (
    
            <ToastProvider>
                <OrderProvider>
                <Router>
                    <NavBar />
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/cardapio" element={<MenuPage />} />
                            <Route path="/pedidos" element={<OrderPage />} />
                            <Route path="/categoria/:category" element={<CategoryPage />} />
                        </Routes>
                    </Router>
                </OrderProvider>
            </ToastProvider>
    );
}

export default App;
