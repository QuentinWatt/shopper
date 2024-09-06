import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

vi.mock("react-router-dom", () => ({
  Outlet: () => <div>Mocked Outlet</div>,
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("App", () => {
  it("Renders the App component", () => {
    render(<App />);
    expect(screen.getByText(/Mocked Outlet/i)).toBeInTheDocument();
  });
});
