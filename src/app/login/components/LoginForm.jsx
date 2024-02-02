"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmitLogin() {
    console.log("Email: ", email);
    console.log("Password: ", password);
    router.push("/dashboard");
  }

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmitLogin}>Submit</button>
    </div>
  );
};
