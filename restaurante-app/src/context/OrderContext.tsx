import { createContext, useContext, useState, ReactNode } from "react";

// Definição da estrutura do pedido
interface OrderItem {
    id: number;
    name: string;
    price: string;
    image: string;
    quantity: number;
}

interface OrderContextType {
    orders: OrderItem[];
    addToOrder: (item: OrderItem) => void;
    removeFromOrder: (id: number) => void;
    clearOrder: () => void;
}

// Criando o contexto
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Hook personalizado para usar o contexto
export function useOrder() {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error("useOrder must be used within an OrderProvider");
    }
    return context;
}

// Provedor do contexto
export function OrderProvider({ children }: { children: ReactNode }) {
    const [orders, setOrders] = useState<OrderItem[]>([]);

    // Adiciona um item ao pedido (se já existir, aumenta a quantidade)
    const addToOrder = (item: OrderItem) => {
        setOrders((prevOrders) => {
            // Verifica se o item já existe no pedido
            const existingItemIndex = prevOrders.findIndex(order => order.id === item.id);

            let updatedOrders;
            if (existingItemIndex !== -1) {
                // Se o item já existe, incrementa a quantidade
                updatedOrders = prevOrders.map((order) =>
                    order.id === item.id ? { ...order, quantity: order.quantity + 1 } : order
                );
            } else {
                // Se não existe, adiciona o item
                updatedOrders = [...prevOrders, { ...item, quantity: 1 }];
            }

            return updatedOrders;
        });
    };

    // Remove um item do pedido (caso tenha mais de um, reduz a quantidade)
    const removeFromOrder = (id: number) => {
        setOrders((prevOrders) => {
            const updatedOrders = prevOrders
                .map((order) =>
                    order.id === id ? { ...order, quantity: order.quantity - 1 } : order
                )
                .filter((order) => order.quantity > 0);

            return updatedOrders;
        });
    };

    // Limpa todos os pedidos
    const clearOrder = () => {
        setOrders([]);
    };

    return (
        <OrderContext.Provider value={{ orders, addToOrder, removeFromOrder, clearOrder }}>
            {children}
        </OrderContext.Provider>
    );
}
