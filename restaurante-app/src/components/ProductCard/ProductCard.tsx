import { Link } from "react-router-dom";

interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    link: string;
    category: string; // Para personalizar o botão conforme a categoria
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, image, link, category }) => {
    const buttonText = category === "lanches" || category === "bebidas" ? "Adicionar aos pedidos" : "Ver Mais";

    return (
        <div className="col">
            <div className="card shadow-lg rounded-4 overflow-hidden h-100 d-flex flex-column">
                <img
                    src={image}
                    className="card-img-top"
                    alt={`Imagem do produto ${name}`}
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between text-center">
                    <h5 className="card-title text-dark fw-semibold">{name}</h5>
                    <p className="card-text text-muted">{description}</p>
                    <p className="price fw-bold text-danger">{price}</p>
                    
                    <Link to={link} className="btn btn-danger mt-auto">
                        {buttonText}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
