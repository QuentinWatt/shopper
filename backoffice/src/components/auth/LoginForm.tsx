import React, { FormEvent, useContext, useState } from "react";
import TextInput from "@/components/shared/inputs/TextInput";
import Button from "@/components/shared/Button";
import PasswordInput from "@/components/shared/inputs/PasswordInput";
import loginRequest from "@/requests/auth/loginRequest";
import AuthContext from "@/providers/auth/AuthContext";
import BaseErrorResponse from "@/models/responses/BaseErrorResponse";
import Alert from "@/components/shared/alerts/Alert";
import { storeCookie } from "@/helpers/cookies";

const LoginForm: React.FC = () => {
  const { setUser, setToken } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isloading, setLoading] = useState<boolean>(false);
  const [responseError, setResponseError] = useState<BaseErrorResponse | null>(
    null
  );

  const handleSubmission = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const { user, token, error } = await loginRequest({ email, password });
    setLoading(false);
    if (!error) {
      setUser(user!);
      setToken(token!);
      storeCookie("token", token!);
      storeCookie("user", JSON.stringify(user)!);
    } else {
      setResponseError(error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-6">
      <div className="w-full border border-gray-300 rounded bg-white p-5">
        <h1 className="font-bold text-2xl mb-5 text-center">Login</h1>
        <form onSubmit={(e) => handleSubmission(e)}>
          {responseError?.message && (
            <Alert className="bg-red-300 text-red-950">
              {responseError.message}
            </Alert>
          )}
          <div className="my-3">
            <TextInput
              id="email"
              label="Email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-3">
            <PasswordInput
              id="password"
              label="Password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button
              loading={isloading}
              className="flex justify-between items-center"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
