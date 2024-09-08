import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

  it("it has an error if the response is not successful", async () => {
    vi.mock("@/requests/auth/loginRequest", () => ({
      __esModule: true,
      default: vi.fn().mockResolvedValue({
        error: {
          message: "The email field is required. (and 1 more error)",
        },
      }),
    }));

    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    await waitFor(() => {
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      fireEvent.click(loginButton);
    });

    expect(screen.getByText("The email field is required. (and 1 more error)"));
  });
});
