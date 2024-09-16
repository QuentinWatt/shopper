import React, { useEffect, useState, useCallback, useRef } from "react";
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
  const [progress, setProgress] = useState<number>(100);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<number>(duration);
  const endTimeRef = useRef<number | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const close = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose(id);
    }, 500);
  }, [id, onClose]);

  const startCountdown = useCallback(() => {
    const endTime = Date.now() + remainingTime;
    endTimeRef.current = endTime;

    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const newRemainingTime = Math.max(endTime - now, 0);
      const newProgress = (newRemainingTime / duration) * 100;
      setProgress(newProgress);

      if (newRemainingTime <= 0) {
        clearInterval(intervalRef.current!);
        close();
      }
    }, 100);
  }, [remainingTime, duration, close]);

  useEffect(() => {
    if (!isPaused) {
      startCountdown();
    }

    return () => clearInterval(intervalRef.current!);
  }, [isPaused, startCountdown]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (endTimeRef.current) {
      setRemainingTime(endTimeRef.current - Date.now());
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  if (!isVisible) return null;

  return (
    <div
      {...props}
      className={`toast ${type}${isExiting ? " toast-exit" : ""}${
        className ? ` ${className}` : ``
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={close}
    >
      {message}
      <div className="toast-progress" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default Toast;
