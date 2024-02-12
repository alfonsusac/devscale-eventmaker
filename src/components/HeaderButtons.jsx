"use client";

import toast from "react-hot-toast";
import { login, logout } from "@/lib/session";

function handleRegister() {}
function handleGoToDashboard() {}

function handleLogin(email, password) {
  login(email, password);
  toast.success("Welcome!");
}

function handleLogout() {
  logout();
  toast.success("Logout success!");
  router.push("/");
}

const MainButton = ({ funcOnClick, borderCol, text }) => {
  const classNames = `text-sm border-2 ${borderCol} rounded-xl py-1 px-2`;
  return (
    <button onClick={funcOnClick} className={classNames}>
      {text}
    </button>
  );
};

export const HeaderButtons = ({ type }) => {
  if ((type === "Guest")) {
    return (
      <div className="flex gap-2">
        <MainButton
          funcOnClick={handleLogin}
          borderCol="border-indigo-600"
          text="Login"
        />
        <MainButton
          funcOnClick={handleRegister}
          borderCol="border-green-600"
          text="Register"
        />
      </div>
    );
  } else {
    return (
      <div className="flex gap-2">
        <MainButton
          funcOnClick={handleGoToDashboard}
          borderCol="border-indigo-600"
          text="Go to Dashboard"
        />
        <MainButton
          funcOnClick={handleLogout}
          borderCol="border-rose-600"
          text="Logout"
        />
      </div>
    );
  }
};
