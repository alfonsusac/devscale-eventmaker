"use client";

import toast from "react-hot-toast";
import { login, logout } from "@/lib/session";

function handleLogin() {
  login();
  toast.success("Welcome!");
  router.push();
}

function handleLogout() {
  logout();
  toast.success("Logout success!");
  router.push("/");
}

export const LoginButton = () => {
  return (
    <button
      onClick={handleLogin}
      className="text-sm border-2 border-indigo-600 rounded-xl py-1 px-2"
    >
      Login
    </button>
  );
}

export const LogoutButton = () => {
  return (
    <button
      onClick={handleLogout}
      className="text-sm border-2 border-rose-600 rounded-xl py-1 px-2"
    >
      Logout
    </button>
  );
};
