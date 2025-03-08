import { useToast } from "../../context/ToastContext/ToastContext"; 
import { useOrder } from "../../context/OrderContext";  
import './ProductCard.css';

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
    const { triggerToast } = useToast();

    const handleAddToOrder = () => {
        addToOrder({ id, name, price, image, quantity: 1 });
        triggerToast(`${name} adicionado aos pedidos!`);
        console.log("Botão clicado!", name)
    };

    const buttonText = category === "lanches" || category === "bebidas" || category === "sobremesas" ? "Adicionar aos pedidos" : "Ver mais";

    return (
        <div className="col" key={id}>
            <div className="card d-flex flex-column shadow-lg rounded-4 overflow-hidden h-100">
                <img src={image} className="card-img-top" alt={name} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title text-dark fw-semibold text-center">{name}</h5>
                    <p className="card-text text-muted text-center">{description}</p>
                    <h5 className="card-title text-dark fw-semibold text-center">{price}</h5>

                    {category === "lanches" || category === "bebidas" || category === "sobremesas" ? (
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
