"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { login, logout } from "@/lib/session";

const MainButton = ({ funcOnClick, text }) => {
  const classNames = `button btn-primary`;
  return (
    <button onClick={funcOnClick} className={classNames}>
      {text}
    </button>
  );
};

export const HeaderButtons = ({ type }) => {
  const router = useRouter();

  function handleLogout() {
    logout();
    toast.success("Logout success!");
    router.push("/");
  }

  if (type === "Guest") {
    return (
      <div className="flex gap-2">
        <button className="button" onClick={() => router.push('/login')}>
          Login
        </button>
        <button className="button btn-primary" onClick={() => router.push('/register')}>
          Register
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex gap-2">
        <MainButton
          funcOnClick={() => router.push("/dashboard")}
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
