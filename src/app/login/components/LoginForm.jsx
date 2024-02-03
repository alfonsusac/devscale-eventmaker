"use client";

import { useRequestLogin } from "@/lib/fetchAPI";

export const LoginForm = () => {
  const { loading, setEmail, setPassword, handleSubmitLogin } =
    useRequestLogin();

  return (
    <div className="flex w-full h-full">
      <div className="bg-blue-500 h-[100vh] w-[50vw]"></div>
      <div className="flex items-center justify-center w-[50vw]">
        <form onSubmit={handleSubmitLogin} className="flex flex-col gap-4 w-80">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button className="btn btn-primary ">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};
