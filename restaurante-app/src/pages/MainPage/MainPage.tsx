import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
    // Categorias de comida
    const categories = [
        {
            id: 1,
            name: "Lanches",
            description: "Os melhores hambúrgueres e batatas fritas!",
            image: "/hamburguer.webp" // Caminho da imagem
        },
        {
            id: 2,
            name: "Bebidas",
            description: "Refrigerantes, sucos e mais para refrescar seu dia.",
            image: "/Refrigerante-1.jpg", // Caminho da imagem
        },
        {
            id: 3,
            name: "Sobremesas",
            description: "Sobremesas deliciosas para adoçar sua refeição.",
            image: "/sobremesas.avif", // Caminho da imagem
        },
    ];

    return (
        <main>
            <div className="main-title">
                <h1>Bem-vindo ao E-FOOD</h1>
                <p>Escolha uma categoria e explore nosso cardápio!</p>
            </div>

            <div className="categories">
                {categories.map((category) => (
                    <div className="card" key={category.id}>
                        <img src={category.image} alt={category.name} />
                        <h2>{category.name}</h2>
                        <p>{category.description}</p>
                        <Link to={`/categoria/${category.name.toLowerCase()}`}>
                            <button>Ver Mais</button>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default MainPage;
