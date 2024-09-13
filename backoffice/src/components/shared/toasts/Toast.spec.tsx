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
});
