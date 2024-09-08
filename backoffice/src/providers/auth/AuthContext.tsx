import { createContext } from "react";
import User from "@/models/User";

interface AuthContextState {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  isLoggedIn: () => boolean;
}

const initialState: AuthContextState = {
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  isLoggedIn: () => false,
};

const AuthContext = createContext(initialState);

export default AuthContext;
