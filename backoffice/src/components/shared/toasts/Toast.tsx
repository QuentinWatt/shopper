import React, { useEffect, useState, useCallback } from "react";
import { ToastType } from "./types";

type ToastProps = {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
  className?: string;
  onClose?: (id: string) => void;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

type ToastStyles = {
  [key in ToastType]: {
    backgroundColor: string;
    color: string;
  };
};

const Toast: React.FC<ToastProps> = ({
  id,
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

  const close = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose(id);
    }, 500);
  }, [onClose, id]);

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      close();
    }, duration);

    return () => clearTimeout(closeTimer);
  }, [duration, close]);

  useEffect(() => {
    const intervalDuration = 100;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(
          prev + 100 / (duration / intervalDuration),
          100
        );
        return newProgress;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [duration]);

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
      className={`toast${isExiting ? " toast-exit" : ""}${
        className ? ` ${className}` : ``
      }`}
      onClick={close}
    >
      {message}
      <div className="toast-progress" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default Toast;
