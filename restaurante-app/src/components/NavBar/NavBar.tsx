import "./NavBar.css";

function NavBar() {
    return (
        <header>
            <div className="title">
                <h1>E-FOOD</h1>
                <p>Seu lanche rápido!</p>
            </div>

            <div className="navigation">
                <a href="">Início</a>
                <a href="">Cardápio</a>
                <a href="">Pedido</a>
                <a href="">Sobre</a>
            </div>
        </header>
    )
}

export default NavBar;