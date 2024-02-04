"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await fetch("https://eventmakers-api.fly.dev/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    console.log(res.json());
    router.push("/login");
  }

  return (
    <div className="flex w-full h-full">
      <div className="bg-blue-500 h-[100vh] w-[50vw]"></div>
      <div className="flex items-center justify-center w-[50vw]">
        <form onSubmit={handleRegister} className="flex flex-col gap-4 w-80">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
};
