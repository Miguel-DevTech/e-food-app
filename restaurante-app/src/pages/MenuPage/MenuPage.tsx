import { useOrder } from "../../context/OrderContext";
import { useToast } from "../../context/ToastContext/ToastContext";
import "./MenuPage.css";

const menuItems = [
    {
        id: 1,
        name: "Hambúrguer Clássico",
        image: "/hamburguer.webp",
        ingredients: "Pão, carne, queijo, alface, tomate, maionese",
        price: "R$19,99",
    },
    {
        id: 2,
        name: "Cheeseburger",
        image: "/cheeseburguer.jpg",
        ingredients: "Pão, carne, queijo cheddar, bacon, ketchup",
        price: "R$22,99",
    },
    {
        id: 3,
        name: "X-Salada",
        image: "/X-Salada.png",
        ingredients: "Pão, carne, queijo cheddar, alface, tomate, molho especial",
        price: "R$21,99",
    },
];

const MenuPage: React.FC = () => {
    const { addToOrder } = useOrder();
    const { triggerToast } = useToast(); // Acessando o toast

    const handleAddToOrder = (item: any) => {
        addToOrder({ ...item, quantity: 1 });
        triggerToast(`${item.name} adicionado aos pedidos! 🛒`); // Ativando o toast
    };

    return (
        <section className="container my-5">
            <h1 className="text-center text-light fw-bold">Cardápio</h1>
            <table className="table table-striped table-hover mt-4">
                <thead className="table-dark">
                    <tr>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Ingredientes</th>
                        <th>Preço</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.image} alt={item.name} className="menu-image" />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.ingredients}</td>
                            <td>{item.price}</td>
                            <td>
                                <button 
                                    className="btn btn-success"
                                    onClick={() => handleAddToOrder(item)}
                                >
                                    Adicionar aos pedidos
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default MenuPage;
