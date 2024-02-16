"use client";

import { LogoWithText } from "@/components/Logo";
import { login } from "@/lib/session";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";


export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const { status, message } = await login(email, password);
      let loginOk = status.toString().slice(0, 2) == "20";
      if (loginOk) {
        router.push("/dashboard");
        router.refresh();
      } else {
        toast.error(message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col m-auto max-w-80">
      <Link href={'/'}>
        <LogoWithText />
      </Link>
      <h1 className="text-4xl pt-6 font-extrabold tracking-tight">Login</h1>
      <form onSubmit={handleSubmitLogin} className="pt-10">
        <label>Email address</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="input input-bordered w-full"
          required

        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="input input-bordered w-full"
          required

        />
        <button className="button btn-primary self-stretch text-sm h-11 mt-8">
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
      <p className="text-sm self-center mt-10 font-semibold text-[#4d4d4d]">
        {"Don't"} have account?{" "}
        <Link href={"/register"} className="font-bold text-blue-700 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};