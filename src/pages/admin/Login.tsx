import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending, error } = useLogin();

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <form
      className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-10 w-[400px]px-20 py-10 rounded"
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        login(email, password);
      }}
    >
      <label className="flex flex-col space-y-2 w-full">
        <span className="text-xl">Email:</span>
        <input
          type="email"
          placeholder="Twój email"
          onChange={handleEmailInput}
          value={email}
          className="w-full px-5 py-2 rounded"
          required
        />
      </label>
      <label className="flex flex-col space-y-2 w-full">
        <span className="text-xl">Hasło:</span>
        <input
          type="password"
          placeholder="Hasło"
          onChange={handlePasswordInput}
          value={password}
          className="w-full px-5 py-2 rounded"
          required
        />
      </label>
      {!isPending && (
        <button
          type="submit"
          className="bg-black text-white px-10 py-2 rounded"
        >
          Zaloguj
        </button>
      )}
      {isPending && (
        <button className="bg-black text-white px-10 py-2 rounded">
          Logowanie...
        </button>
      )}
    </form>
  );
};

export default Login;
