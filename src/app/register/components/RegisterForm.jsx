"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    console.log(name, email, password);
    router.push("/login");
  }

  return (
    <div className="flex w-full h-full">
      <div className="bg-blue-500 h-[100vh] w-[50vw]"></div>
      <div className="flex items-center justify-center w-[50vw]">
        <form onSubmit={handleRegister} className="flex flex-col gap-4 w-80">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="input input-bordered input-primary w-full max-w-xs"
          />
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
