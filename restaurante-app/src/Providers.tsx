// src/Providers.tsx
import { OrderProvider } from "./context/OrderContext"; // Importando o contexto de pedidos
import { ToastProvider } from "./context/ToastContext/ToastContext"; // Importando o contexto de notificações
import { ReactNode } from "react";

// Componente que agrupa os Providers e evita recriações desnecessárias
export function Providers({ children }: { children: ReactNode }) {
    return (
        <ToastProvider>
            <OrderProvider>
                {children}
            </OrderProvider>
        </ToastProvider>
    );
}
