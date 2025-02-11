import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                {/* Logo */}
                <Link className="navbar navbar-brand" to="/">
                    <h1>E-FOOD</h1>
                </Link>

                {/* Botão do Menu Mobile */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleMenu}
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links do Menu */}
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cardapio">Cardápio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pedidos">Pedidos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobre">Sobre</Link>
                        </li>
                    </ul>
                </div>

                {/* Botão do Carrinho/Pedidos */}
                <Link className="btn btn-danger" to="/pedidos">
                    🛒 Meus Pedidos
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
