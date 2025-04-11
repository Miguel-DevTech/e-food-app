import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './CategoryPage.css'

const productsData = {
    lanches: [
        { 
            id: 1,
            name: 'Hambúrguer', 
            description: 'Carne suculenta com queijo e alface.', 
            price: 'R$19,99', 
            image: '/hamburguer.webp' 
        },
        { 
            id: 2, 
            name: 'Cheeseburger', 
            description: 'Hambúrguer com cheddar e bacon.', 
            price: 'R$22,99', 
            image: '/Cheeseburguer-2.jpg' 
        },
        {
            id: 3,
            name: 'X-Salada',
            description: 'X-salada clássico com queijo cheddar',
            price: 'R$21,99',
            image: '/X-Salada.png'
        }
    ],

    bebidas: [
        { 
            id: 4,
            name: 'Coca-Cola', 
            description: 'Refrigerante gelado.', 
            price: 'R$6,99', 
            image: '/coca-cola.webp' 
        },
        {
            id: 5,
            name: 'Del Valle',
            description: 'Suco fresco da sua fruta favorita',
            price: 'R$4,00',
            image: '/suco-de-laranja.avif'
        }
    ],
    sobremesas: [
        { 
            id: 6, 
            name: 'Brownie', 
            description: 'Brownie de chocolate quente.', 
            price: 'R$9,99', 
            image: '/brownie.webp' },
    ],
};

function CategoryPage() {
    const { category } = useParams();
    const categoryKey = category ? category.toLowerCase() : ''; // Garantir que category seja sempre string em minúsculas
    const categoryData = productsData[categoryKey as keyof typeof productsData];

    if (!categoryData) {
        return (
            <div className="text-center mt-5">
                <h2 className="text-danger">Categoria não encontrada!</h2>
            </div>
        );
    }

    return (
        <main>
            <div className="container my-10">
            <h1 className="text-center text-light fw-bold">
                {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
            </h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 justify-content-center">
                {categoryData.map((product) => (
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        link="#"
                        category={categoryKey} // Passa a categoria para o ProductCard
                    />
                ))}
            </div>
        </div>
        </main>
    );
}

export default CategoryPage;
