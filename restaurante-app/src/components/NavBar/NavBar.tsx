import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
            <div className="container">
                {/* Logo */}
                <Link className="navbar navbar-brand" to="/">
                    <h1 className="fw-bold">E-FOOD</h1>
                </Link>
    
                {/* Botão do Menu Mobile, só aparece abaixo de 768px */}
                <button 
                    className="navbar-toggler d-block d-lg-none text-light" 
                    type="button" 
                    onClick={toggleMenu}
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                {/* Links do Menu */}
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-light mx-2 px-4 py-2 rounded-pill" to="/">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-light mx-2 px-4 py-2 rounded-pill" to="/cardapio">Cardápio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-light mx-2 px-4 py-2 rounded-pill" to="/sobre">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            {/* Botão "Meus Pedidos" para telas maiores */}
                            <Link className="nav-link btn btn-danger mx-2 px-4 py-2 rounded-pill" to="/pedidos">Meus Pedidos 🛒</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    
}

export default Navbar;
