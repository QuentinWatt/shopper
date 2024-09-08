import { shopperApi } from "@/clients/shopperApi";
import User from "@/models/User";

type loginCredentials = {
  email: string;
  password: string;
};

const loginRequest = async ({
  email,
  password,
}: loginCredentials): Promise<{ user: User | null; token: string | null }> => {
  let token: string | null = null;
  let user: User | null = null;

  try {
    const response = await shopperApi.post("/auth/login", {
      email,
      password,
    });
    token = response.data.data.token ?? null;
    user = response.data.data.user ?? null;
  } catch (error: unknown) {
    console.log(error);
  }

  return {
    user,
    token,
  };
};

export default loginRequest;
