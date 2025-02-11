import MainCard from '../../components/MainCard/MainCard';
import './MainPage.css';

function MainPage() {
    const categories = [
        {
            id: 1,
            name: "Lanches",
            description: "Os melhores hambúrgueres e batatas fritas!",
            image: "/hamburguer.webp",
            link: "/categoria/lanches",
        },
        {
            id: 2,
            name: "Bebidas",
            description: "Refrigerantes, sucos e mais para refrescar seu dia.",
            image: "/Refrigerante-1.jpg",
            link: "/categoria/bebidas",
        },
        {
            id: 3,
            name: "Sobremesas",
            description: "Sobremesas deliciosas para adoçar sua refeição.",
            image: "/sobremesas.avif",
            link: "/categoria/sobremesas",
        },
    ];

    return (
        <main className="container">
            {/* Título Principal */}
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-light">Bem-vindo ao E-FOOD</h1>
                <p className="lead text-light">Escolha uma categoria e explore nosso cardápio!</p>
            </div>

            {/* Grid de Categorias - Lado a Lado */}
            <div className="row d-flex flex-wrap justify-content-center g-4">
                {categories.map((category) => (
                    <div className="col-12 col-sm-6 col-md-4 d-flex" key={category.id}>
                        <MainCard 
                            id={category.id}
                            name={category.name}
                            description={category.description}
                            image={category.image}
                            link={category.link}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}

export default MainPage;
