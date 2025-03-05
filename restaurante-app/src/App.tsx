import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./pages/MainPage/MainPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import "./mainStyles/App.css";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cardapio" element={<MenuPage />} />
                <Route path="/pedidos" element={<OrderPage />} />
                <Route path="/categoria/:category" element={<CategoryPage />} />
            </Routes>
        </Router>
    );
}

export default App;
