import { createContext, useContext, useState, ReactNode } from "react";
import './ToastStyle.css';

// Definição do tipo do contexto
interface ToastContextType {
    showToast: Boolean;
    message: string;
    triggerToast: (msg: string) => void;
}

// Criando o contexto
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Hook para usar o contexto
export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}

// Provedor do contexto
export function ToastProvider({ children }: { children: ReactNode }) {
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState("");

    const triggerToast = (msg: string) => {
        setMessage(msg);
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ showToast, message, triggerToast }}>
            {children}

            {/* Toast Global */}
            {showToast && (
                <div className="toast-container position-fixed top-0 end-0 p-3">
                    <div className="toast show align-items-center text-bg-success border-0" role="alert">
                        <div className="d-flex">
                            <div className="toast-body">{message}</div>
                            <button
                                type="button"
                                className="btn-close btn-close-white me-2 m-auto"
                                onClick={() => setShowToast(false)}
                            ></button>
                        </div>
                    </div>
                </div>
            )}
        </ToastContext.Provider>
    )

}