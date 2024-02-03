"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

export const useLogin = () => {
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

  return {
    setEmail,
    setPassword,
    handleSubmitLogin,
  };
};
