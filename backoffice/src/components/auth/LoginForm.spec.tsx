import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("has an h1", () => {
    render(<LoginForm />);
    expect(screen.getByRole("heading", { level: 1, name: "Login" }));
  });

  it("has an email input", () => {
    render(<LoginForm />);
    const label = screen.getByLabelText(/email/i);

    expect(label).toBeInTheDocument();
    expect(label.closest("input")).toHaveAttribute("name", "email");
    expect(label.closest("input")).toHaveAttribute("type", "text");
  });

  it("has a password input", () => {
    render(<LoginForm />);
    const label = screen.getByLabelText(/password/i);

    expect(label).toBeInTheDocument();
    expect(label.closest("input")).toHaveAttribute("name", "password");
    expect(label.closest("input")).toHaveAttribute("type", "password");
  });

  it("has a submit button", () => {
    render(<LoginForm />);
    expect(screen.getByRole("button", { name: "Login" }));
  });
});
