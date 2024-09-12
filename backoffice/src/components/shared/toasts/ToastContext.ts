import { createContext, Context, useContext } from "react";
import { ToastData, ToastType } from "./types";

type ToastContextType = {
  toasts: ToastData[];
  setToasts: React.Dispatch<React.SetStateAction<ToastData[]>>;
  addToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
};

const initialState: ToastContextType = {
  toasts: [],
  setToasts: () => {},
  addToast: () => {},
  removeToast: () => {},
};

const ToastContext: Context<ToastContextType> = createContext(initialState);

export const useToast = () => {
  return useContext(ToastContext);
};

export default ToastContext;
