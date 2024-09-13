export type ToastType = "info" | "success" | "warning" | "error";

export type ToastData = {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
};
