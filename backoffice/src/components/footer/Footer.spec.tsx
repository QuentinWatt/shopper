import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("has a copyriight info", () => {
    render(<Footer />);
    expect(screen.getByText(/© Shopper 2024/i)).toBeInTheDocument();
  });
});
