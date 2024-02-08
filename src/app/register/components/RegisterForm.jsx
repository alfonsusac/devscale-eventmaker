"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { requestRegister } from "@/lib/fetchAPI";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";


export const RegisterForm = () => {
  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const req = await requestRegister(name, email, password);

    if (req.message === "User registered successfully") {
      toast.success(req.message);
      router.push("/login");
      return;
    }
    toast.error(req.message);
  }

  return (
    <div className="flex flex-col items-center justify-center m-auto h-[100vh] gap-10">
      <Image src="/logo.png" width={250} height={200} alt="logo" />
      <h1 className="text-2xl font-semibold">REGISTER</h1>
      <div className="flex items-center justify-center w-[50vw]">
        <form onSubmit={handleRegister} className="flex flex-col gap-4 w-80">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />

          <button className="btn btn-sm btn-primary">Register</button>
        </form>
      </div>
      <p className="text-sm ">
        Already have account ?{" "}
        <Link href={"/login"} className="font-bold text-blue-700">
          SIGN IN
        </Link>
      </p>
    </div>
  );
};
