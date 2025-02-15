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
            // Verifica se o item já existe na lista
            const existingItemIndex = prevOrders.findIndex(order => order.id === item.id);

            if (existingItemIndex !== -1) {
                // Se já existe, aumenta a quantidade
                return prevOrders.map((order, index) => 
                    index === existingItemIndex ? { ...order, quantity: order.quantity + 1 } : order
                );
            }

            // Se não existir, adiciona ao array SEM SOBRESCREVER OS OUTROS ITENS
            return [...prevOrders, { ...item, quantity: 1 }];
        });
    };

    // Remove um item do pedido (caso tenha mais de um, reduz a quantidade)
    const removeFromOrder = (id: number) => {
        setOrders((prevOrders) =>
            prevOrders
                .map((order) =>
                    order.id === id ? { ...order, quantity: order.quantity - 1 } : order
                )
                .filter((order) => order.quantity > 0)
        );
    };

    // Limpa todos os pedidos
    const clearOrder = () => setOrders([]);

    return (
        <OrderContext.Provider value={{ orders, addToOrder, removeFromOrder, clearOrder }}>
            {children}
        </OrderContext.Provider>
    );
}
