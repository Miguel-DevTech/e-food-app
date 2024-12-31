import { useParams } from 'react-router-dom';
import './CategoryPage.css';

// Dados simulados dos produtos (poderiam vir de uma API)
const productsData = {
    lanches: [
        { id: 1, 
            name: 'Hambúrguer Clássico', 
            description: 'Carne suculenta com queijo e alface.', 
            price: 'R$ 19,99', 
            image: '/hamburguer.webp' },
        { id: 2, 
            name: 'Cheeseburger', 
            description: 'Hambúrguer com cheddar e bacon.', 
            price: 'R$ 22,99', 
            image: '/cheeseburguer.jpg' },
    ],
    bebidas: [
        { id: 1, 
            name: 'Coca-Cola', 
            description: 'Refrigerante gelado.', 
            price: 'R$ 6,99', 
            image: '/coca-cola.webp' },
        { id: 2, 
            name: 'Suco de Laranja', 
            description: 'Suco natural e refrescante.', 
            price: 'R$ 7,99', 
            image: '/suco-de-laranja.avif' },
    ],
    sobremesas: [
        { id: 1, 
            name: 'Brownie', 
            description: 'Brownie de chocolate quente.', 
            price: 'R$ 9,99', 
            image: '/brownie.webp' },
        { id: 2, 
            name: 'Pudim',
            description: 'Pudim de leite condensado.', 
            price: 'R$ 8,99', 
            image: '/sobremesas.avif' 
        },
    ],
};

function CategoryPage() {
    const { category } = useParams();  // Captura a categoria da URL
    
    // Verifica se a categoria existe no objeto productsData
    const categoryData = category && productsData[category.toLowerCase()];
    
    // Se a categoria não existir, exibe uma mensagem de erro
    if (!categoryData) {
        return (
            <div className="category-error">
                <h2>Categoria não encontrada!</h2>
            </div>
        );
    }

    return (
        <div className="category-page">
            <h1>{category?.charAt(0).toUpperCase() + category?.slice(1)}</h1> {/* Exibe o nome da categoria com a primeira letra maiúscula */}

            <div className="products-list">
                {categoryData.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p className="price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;
