import React, { useCallback, useEffect, useState } from "React";
import { ToastType } from "./types";

type ToastProps = {
  message: string;
  type?: ToastType;
  duration?: number;
  className?: string;
  onClose?: () => void;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

type ToastStyles = {
  [key in ToastType]: {
    backgroundColor: string;
    color: string;
  };
};

const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  className = "",
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Memoize the close function using useCallback
  const close = useCallback(() => {
    setIsExiting(true); // Start exit animation
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 500); // Delay removing the toast to match the exit animation duration
  }, [onClose]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 100 / (duration / 100) : 100));
    }, 100);

    const timer = setTimeout(() => {
      close();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [duration, close]);

  if (!isVisible) return null;

  const toastStyles: ToastStyles = {
    info: { backgroundColor: "#2196F3", color: "#fff" },
    success: { backgroundColor: "#4CAF50", color: "#fff" },
    warning: { backgroundColor: "#FF9800", color: "#fff" },
    error: { backgroundColor: "#F44336", color: "#fff" },
  };

  return (
    <div
      style={{ ...toastStyles[type] }}
      {...props}
      className={`toast${className ? ` ${className}` : ``}${
        isExiting ? " toast-exit" : ""
      }`}
      onClick={close}
    >
      {message}
      <div className="toast-progress" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default Toast;
