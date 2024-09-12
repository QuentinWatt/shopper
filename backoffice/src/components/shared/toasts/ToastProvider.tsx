import React, { useState } from "react";
import Toast from "./Toast";
import ToastContext from "./ToastContext";
import { ToastData, ToastType } from "./types";

type ToastProviderProps = {
  children?: React.ReactNode;
};

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (
    message: string,
    type: ToastType = "info",
    duration: number = 3000
  ) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev: ToastData[]) => [
      ...prev,
      { id, message, type, duration },
    ]);
  };

  const removeToast = (id: string) => {
    setToasts((prev: ToastData[]) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider
      value={{ toasts, setToasts, addToast: addToast, removeToast }}
    >
      {children}
      {toasts.length > 0 && (
        <div className="toast-container">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              duration={toast.duration}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
