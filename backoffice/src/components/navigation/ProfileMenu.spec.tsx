import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ProfileMenu from "./ProfileMenu";
import AuthContext from "@/providers/auth/AuthContext";

describe("ProfileMenu", () => {
  beforeEach(() => {
    const setUser = vi.fn();
    const setToken = vi.fn();
    const isLoggedIn = vi.fn();
    const token = "123456789";
    const user = { id: 1, name: "Quentin Watt", email: "quentin@shopper.test" };

    render(
      <AuthContext.Provider
        value={{ user, setUser, token, setToken, isLoggedIn }}
      >
        <ProfileMenu />
      </AuthContext.Provider>
    );
  });

  it("has a profile button", () => {
    expect(screen.getByTestId("profile-button")).toBeInTheDocument();
  });

  it("has contains the first letter of the user's name", () => {
    const profileButton = screen.getByTestId("profile-button");
    expect(profileButton).toHaveTextContent("Q");
  });

  it("does not show the dropdown by default", () => {
    expect(
      screen.queryByTestId("profile-dropdown-menu")
    ).not.toBeInTheDocument();
  });

  it("opens the dropdown menu when clicked", async () => {
    const profileButton = screen.getByTestId("profile-button");
    fireEvent.click(profileButton);

    await waitFor(() => {
      expect(screen.queryByTestId("profile-dropdown-menu")).toBeInTheDocument();
    });
  });

  it("contains a logout button when opeen", async () => {
    const profileButton = screen.getByTestId("profile-button");
    fireEvent.click(profileButton);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /logout/i })
      ).toBeInTheDocument();
    });
  });
});
