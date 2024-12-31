import { useState } from 'react';
import './NavBar.css';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="title">
                <h1>E-FOOD</h1>
            </div>

            <div className={`navigation ${isMenuOpen ? 'active' : ''}`}>
                <a href="/">Início</a>
                <a href="/cardapio">Cardápio</a>
                <a href="/pedidos">Pedidos</a>
                <a href="/sobre">Sobre</a>
            </div>

            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>
        </header>
    );
}

export default NavBar;
