"use client";

import { requestLogin } from "@/lib/fetchAPI";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { payload, token } = await requestLogin(email, password);

      if (!payload || !token) {
        throw new Error("User not found, please try again.");
      }

      localStorage.setItem("user", JSON.stringify(payload));
      Cookies.set("token", token);
      toast.success("Logged in successfully");
      setTimeout(() => {
        router.push("/dashboard");
        setLoading(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-auto h-[100vh] gap-10">
      <Image src="/logo.png" width={250} height={200} />
      <h1 className="text-4xl">LOGIN</h1>
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
