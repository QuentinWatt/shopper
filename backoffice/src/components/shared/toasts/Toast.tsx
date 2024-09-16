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

const Toast: React.FC<ToastProps> = ({
  id,
  message,
  type = "info",
  duration = 3000,
  onClose,
  className = "",
  ...props
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  const close = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose(id);
    }, 500);
  }, [onClose, id]);

  const closeTimer = setTimeout(() => {
    close();
  }, duration);

  useEffect(() => {
    return () => {
      clearTimeout(closeTimer);
    };
  }, [closeTimer]);

  useEffect(() => {
    const intervalDuration = 100;
    setProgress(100);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.max(
          prev - 100 / (duration / intervalDuration),
          0
        );
        return newProgress;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div
      {...props}
      className={`toast ${type}${isExiting ? " toast-exit" : ""}${
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
