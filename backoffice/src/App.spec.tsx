import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  it("Renders the App component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
  });
});
