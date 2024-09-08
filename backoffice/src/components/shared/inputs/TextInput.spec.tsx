import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput", () => {
  it("has a label", () => {
    render(<TextInput id="username" label="Email" />);
    const label = screen.getByLabelText(/email/i);
    expect(label).toBeInTheDocument();
  });

  it("has an input", () => {
    render(<TextInput id="username" label="Email" />);
    const label = screen.getByLabelText(/email/i);
    const input = label.closest("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", "username");
  });
});
