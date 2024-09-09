import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LogoutButton from "./LogoutButton";
import { shopperApi } from "@/clients/shopperApi";
import AuthContext from "@/providers/auth/AuthContext";

describe("LogoutButton", () => {
  const setUser = vi.fn();
  const setToken = vi.fn();
  const isLoggedIn = vi.fn();
  const token = "123456789";
  const user = { id: 1, name: "Quentin Watt", email: "quentin@shopper.test" };

  beforeEach(() => {
    render(
      <AuthContext.Provider
        value={{
          user,
          token,
          isLoggedIn,
          setToken,
          setUser,
        }}
      >
        <LogoutButton />
      </AuthContext.Provider>
    );
  });

  it("has a button to logout", () => {
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
  });

  it("does not show a loader by default", () => {
    expect(screen.queryByTestId("spinning-loader")).not.toBeInTheDocument();
  });

  it("shows a loader when the button is clicked", async () => {
    const button = screen.getByRole("button", { name: /logout/i });
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.queryByTestId("spinning-loader")).toBeInTheDocument();
    });
  });

  it("makes a request to logout", async () => {
    const button = screen.getByRole("button", { name: /logout/i });
    fireEvent.click(button);
    await waitFor(() => {
      expect(shopperApi.post).toHaveBeenCalledWith("auth/logout");
    });
  });

  it("resets the authoization tokens on logout", async () => {
    const button = screen.getByRole("button", { name: /logout/i });
    fireEvent.click(button);
    await waitFor(() => {
      expect(setUser).toHaveBeenCalledWith(null);
      expect(setToken).toHaveBeenCalledWith(null);
    });
  });
});
