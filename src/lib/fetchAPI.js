"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useState } from "react";

export const useRequestLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmitLogin(e) {
    try {
      setLoading(true);
      //prevent refresh on submissions
      e.preventDefault();
      //fetching the data from the API
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

      //if the response is not okay, throw an error
      if (!res.ok) {
        setTimeout(() => {
          setLoading(false);
          toast.error(`User not found, please try again.`);
        }, 1000);
        return;
      }

      //set the cookie and local storage
      const { payload, token } = await res.json();
      localStorage.setItem("user", JSON.stringify(payload));
      Cookies.set("token", token);

      toast.success("Logged in successfully");

      setTimeout(() => {
        router.push("/dashboard");
        setLoading(false);
      }, 2000);
    } catch (error) {
      toast.error("Something wrong:", error);
    }
  }

  return {
    loading,
    setEmail,
    setPassword,
    handleSubmitLogin,
  };
};
