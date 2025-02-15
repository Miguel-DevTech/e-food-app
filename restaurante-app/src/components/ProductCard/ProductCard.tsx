import { useOrder } from "../../context/OrderContext"; // Importando o contexto

interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    link: string;
    category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, image, link, category }) => {
    const { addToOrder } = useOrder(); // Obtendo a função para adicionar pedidos

    const handleAddToOrder = () => {
        addToOrder({ id, name, price, image, quantity: 1 });
    };

    const buttonText = category === "lanches" || category === "bebidas" ? "Adicionar aos pedidos" : "Ver Mais";

    return (
        <div className="col" key={id}>
            <div className="card d-flex flex-column shadow-lg rounded-4 overflow-hidden h-100">
                <img src={image} className="card-img-top" alt={name} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title text-dark fw-semibold text-center">{name}</h5>
                    <p className="card-text text-muted text-center">{description}</p>
                    <h5 className="card-title text-dark fw-semibold text-center">{price}</h5>

                    {category === "lanches" || category === "bebidas" ? (
                        <button className="btn btn-danger mx-auto mt-auto" onClick={handleAddToOrder}>
                            {buttonText}
                        </button>
                    ) : (
                        <a href={link} className="btn btn-danger mx-auto mt-auto">{buttonText}</a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
