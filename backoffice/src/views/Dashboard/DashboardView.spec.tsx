import { render, screen } from "@testing-library/react";
import DashboardView from "./DashboardView";

describe("DashboardView", () => {
  it("has the correct h1", () => {
    render(<DashboardView />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Dashboard" })
    ).toBeInTheDocument();
  });
});
