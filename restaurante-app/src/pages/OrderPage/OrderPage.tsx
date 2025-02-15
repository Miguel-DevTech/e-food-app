import { useOrder } from "../../context/OrderContext";

const OrderPage = () => {
    const { orders, removeFromOrder, clearOrder } = useOrder(); // Obtendo os pedidos

    return (
        <div className="container my-5">
            <h1 className="text-center text-light fw-bold">Meus Pedidos</h1>

            {orders.length === 0 ? (
                <p className="text-center text-muted">Seu pedido está vazio.</p>
            ) : (
                <div className="row justify-content-center">
                    {orders.map((order) => (
                        <div key={order.id} className="col-md-4">
                            <div className="card shadow-lg rounded-4 overflow-hidden h-100">
                                <img src={order.image} className="card-img-top" alt={order.name} style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title text-dark fw-semibold text-center">{order.name}</h5>
                                    <h5 className="card-title text-dark fw-semibold text-center">{order.price}</h5>
                                    <p className="text-center">Quantidade: {order.quantity}</p>

                                    <button className="btn btn-warning mx-auto mt-auto" onClick={() => removeFromOrder(order.id)}>
                                        Remover 1
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {orders.length > 0 && (
                <div className="text-center mt-4">
                    <button className="btn btn-danger" onClick={clearOrder}>Limpar Pedido</button>
                </div>
            )}
        </div>
    );
};

export default OrderPage;
