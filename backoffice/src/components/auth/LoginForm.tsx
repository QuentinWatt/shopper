import React, { FormEvent, useContext, useState } from "react";
import TextInput from "../shared/inputs/TextInput";
import Loader from "../shared/loader/Loader";
import Button from "../shared/Button";
import PasswordInput from "../shared/inputs/PasswordInput";
import loginRequest from "@/requests/auth/loginRequest";
import AuthContext from "@/providers/auth/AuthContext";

const LoginForm: React.FC = () => {
  const { setUser, setToken } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isloading, setLoading] = useState<boolean>(false);

  const handleSubmission = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(false);
    const { user, token } = await loginRequest({ email, password });
    setUser(user);
    setToken(token);
  };

  return (
    <div className="max-w-md mx-auto my-6">
      <div className="w-full border border-gray-300 rounded bg-white p-5">
        <h1 className="font-bold text-2xl mb-5 text-center">Login</h1>
        <form onSubmit={(e) => handleSubmission(e)}>
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
            <Button className="flex justify-between items-center">
              Login
              {isloading && (
                <Loader color="#fff" className="ml-2" width={18} height={18} />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
