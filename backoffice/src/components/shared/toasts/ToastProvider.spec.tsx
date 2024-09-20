import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ToastProvider from "./ToastProvider";
import ToastContext from "./ToastContext";
import React from "react";
import styles from "./Toast.module.css";

describe("ToastProvider", () => {
  const TestComponent: React.FC = () => {
    const { addToast } = React.useContext(ToastContext);
    return <div onClick={() => addToast("test toast")}>Test Component</div>;
  };

  beforeEach(() => {
    render(
      <ToastProvider>
        <div>child component</div>
        <TestComponent />
      </ToastProvider>
    );
  });

  test("children should be in the document", () => {
    expect(screen.getByText(/child component/i)).toBeInTheDocument();
  });

  test("it should display a toast when the add toast method is clicked", async () => {
    const component = screen.getByText(/Test component/i);
    expect(component).toBeInTheDocument();
    fireEvent.click(component);

    await waitFor(() => {
      expect(screen.queryByText(/test toast/i)).toBeInTheDocument();
    });
  });

  test("it should close the toast if the toast is clicked", async () => {
    const component = screen.getByText(/Test component/i);
    expect(component).toBeInTheDocument();
    fireEvent.click(component);

    const toast = screen.getByText(/test toast/i);
    await waitFor(async () => {
      expect(toast).toBeInTheDocument();
      expect(toast).not.toHaveClass(styles["toast-exit"]);
      fireEvent.click(toast);
      expect(toast).toHaveClass(styles["toast-exit"]);

      await waitFor(() => {
        expect(toast).not.toBeInTheDocument();
      });
    });
  });
});
