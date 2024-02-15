"use client";

import { HeaderButtons } from "@/components/HeaderButtons";
import Link from "next/link";
import { Logo, LogoWithText } from "./Logo";
import { logout } from "@/lib/session";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export const Header = ({ session }) => {
  let UserGreetings;
  let Buttons;

  if (!session) {
    Buttons = <HeaderButtons type="Guest" />;
  } else {
    UserGreetings = `Hi, ${session.userData.name}!`;
    Buttons = <HeaderButtons type="User" />;
  }

  return (
    <header className="flex justify-between p-6 max-w-screen-xl mx-auto gap-5">
      <Link href="/">
        <LogoWithText />
      </Link>
      <div className="flex space-x-2 items-center">
        {/* <p className="text-sm">{UserGreetings}</p> */}
        {Buttons}
      </div>
    </header>
  );
};


export const HeaderDashboard = ({ session }) => {

  const router = useRouter()

  if(!session) return null

  function handleLogout() {
    logout();
    toast.success("Logout success!");
    router.push("/");
  }

  return (
    <header className="flex justify-between p-6 max-w-screen-xl mx-auto gap-5">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex space-x-2 items-center">
        <p className="text-sm font-semibold text-black/60">{session.userData.name}</p>
        <button className="button" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  )
}