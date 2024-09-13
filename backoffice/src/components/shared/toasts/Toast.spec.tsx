import { render, screen } from "@testing-library/react";
import Toast from "./Toast";

describe("Toast", () => {
  it("renders the message", () => {
    render(<Toast id="someid" message="my custom message" />);
    expect(screen.getAllByText(/my custom message/i));
  });

  it("has a div as a progress bar", () => {
    const { container } = render(
      <Toast id="someid" message="my custom message" />
    );
    const toastProgress = container.querySelector("div.toast-progress");
    expect(toastProgress).toBeInTheDocument();
  });

  it("defaults to an info type class", () => {
    const { container } = render(
      <Toast id="someid" message="my custom message" />
    );
    const toast = container.querySelector("div.toast");
    expect(toast).toHaveClass("info");
  });

  it("has an error type class", () => {
    const { container } = render(
      <Toast id="someid" message="whoops!" type="error" />
    );
    const toast = container.querySelector("div.toast");
    expect(toast).toHaveClass("error");
    expect(toast).not.toHaveClass("info");
  });

  it("has an error type class", () => {
    const { container } = render(
      <Toast id="someid" message="success" type="success" />
    );
    const toast = container.querySelector("div.toast");
    expect(toast).toHaveClass("success");
    expect(toast).not.toHaveClass("info");
  });

  it("has a warning type class", () => {
    const { container } = render(
      <Toast id="someid" message="careful!" type="warning" />
    );
    const toast = container.querySelector("div.toast");
    expect(toast).toHaveClass("warning");
    expect(toast).not.toHaveClass("info");
  });
});
