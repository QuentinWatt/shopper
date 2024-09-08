import { shopperApi } from "@/clients/shopperApi";
import BaseErrorResponse from "@/models/responses/BaseErrorResponse";
import User from "@/models/User";
import { AxiosError } from "axios";

type loginCredentials = {
  email: string;
  password: string;
};

type loginResponse = {
  user?: User;
  token?: string;
  error?: BaseErrorResponse;
};

const loginRequest = async ({
  email,
  password,
}: loginCredentials): Promise<loginResponse> => {
  let responseData;
  let responseError;

  try {
    const response = await shopperApi.post("/auth/login", {
      email,
      password,
    });

    responseData = response.data.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      responseError = {
        message: error.response?.data.message,
        response: error.response?.data,
      };
    } else {
      responseError = {
        message: "An unknown error occurred.",
      };
    }
  }

  return {
    user: responseData?.user,
    token: responseData?.token,
    error: responseError,
  };
};

export default loginRequest;
