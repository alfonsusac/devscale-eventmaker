"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { login, logout } from "@/lib/session";

function handleLogout(router) {
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
  const router = useRouter();

  if (type === "Guest") {
    return (
      <div className="flex gap-2">
        <MainButton
          funcOnClick={() => router.push('/login')}
          borderCol="border-indigo-600"
          text="Login"
        />
        <MainButton
          funcOnClick={() => router.push('/register')}
          borderCol="border-green-600"
          text="Register"
        />
      </div>
    );
  } else {
    return (
      <div className="flex gap-2">
        <MainButton
          funcOnClick={() => router.push('/dashboard')}
          borderCol="border-indigo-600"
          text="Go to Dashboard"
        />
        <MainButton
          funcOnClick={handleLogout(router)}
          borderCol="border-rose-600"
          text="Logout"
        />
      </div>
    );
  }
};
