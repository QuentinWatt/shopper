import { render, screen, within } from "@testing-library/react";
import Toast from "./Toast";
import styles from "./Toast.module.css";

describe("Toast", () => {
  it("renders the message", () => {
    render(<Toast id="someid" message="my custom message" />);
    expect(screen.getAllByText(/my custom message/i));
  });

  it("has a div as a progress bar", () => {
    render(<Toast id="someid" message="my custom message" />);
    const toast = screen.getByText(/my custom message/i);
    const toastProgress = within(toast).getByRole("progressbar");
    expect(toastProgress).toHaveClass(styles["toast-progress"]);
  });

  it("defaults to an info type class", () => {
    render(<Toast id="someid" message="my custom message" />);
    const toast = screen.getByText(/my custom message/i);
    expect(toast).toHaveClass(styles.info);
  });

  it("has an error type class", () => {
    render(<Toast id="someid" message="whoops!" type="error" />);
    const toast = screen.getByText(/whoops!/i);
    expect(toast).toHaveClass(styles.error);
    expect(toast).not.toHaveClass(styles.info);
  });

  it("has an error type class", () => {
    render(<Toast id="someid" message="success" type="success" />);
    const toast = screen.getByText(/success/i);
    expect(toast).toHaveClass(styles.success);
    expect(toast).not.toHaveClass(styles.info);
  });

  it("has a warning type class", () => {
    render(<Toast id="someid" message="careful!" type="warning" />);
    const toast = screen.getByText(/careful!/i);
    expect(toast).toHaveClass(styles.warning);
    expect(toast).not.toHaveClass(styles.info);
  });
});
