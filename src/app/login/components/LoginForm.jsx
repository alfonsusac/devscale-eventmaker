"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmitLogin(e) {
    e.preventDefault();

    const res = await fetch("https://eventmakers-api.fly.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const { payload, token } = await res.json();

    localStorage.setItem("user", JSON.stringify(payload));

    Cookies.set("token", token);
    router.push("/dashboard");
  }

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
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};
