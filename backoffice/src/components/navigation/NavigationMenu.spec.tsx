import { render, screen } from "@testing-library/react";
import NavigationMenu from "./NavigationMenu";
import { MemoryRouter } from "react-router-dom";
import { Container } from "react-dom";

describe("Navigation menu", () => {
  describe("Contracted Navigation Menu", () => {
    let container: Container;
    beforeEach(() => {
      const wrapper = render(
        <MemoryRouter initialEntries={["/"]}>
          <NavigationMenu expanded={false} />
        </MemoryRouter>
      );
      container = wrapper.container;
    });

    it("it does not contain the full text for dashboard link", () => {
      const link = container.querySelector('a[href="/"]');
      expect(link).toBeInTheDocument();
      expect(screen.queryByText(/Dashboard/i)).not.toBeInTheDocument();
    });

    it("it does not contain the full text for products link", () => {
      const link = container.querySelector('a[href="/products"]');
      expect(link).toBeInTheDocument();
      expect(screen.queryByText(/products/i)).not.toBeInTheDocument();
    });
  });

  describe("Expanded Navigation Menu", () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={["/your-desired-path"]}>
          <NavigationMenu expanded={true} />
        </MemoryRouter>
      );
    });

    it("Contains a dashboard link with text", () => {
      const dashboardLink = screen.getByRole("link", { name: /dashboard/i });
      expect(dashboardLink).toBeInTheDocument();
      expect(dashboardLink).toHaveAttribute("href", "/");
    });

    it("Contains a products link with text", () => {
      const productsLink = screen.getByRole("link", { name: /products/i });
      expect(productsLink).toBeInTheDocument();
      expect(productsLink).toHaveAttribute("href", "/products");
    });
  });
});
