"use client";

import { HeaderButtons } from "@/components/HeaderButtons";
import Link from "next/link";
import { LogoWithText } from "./Logo";


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
        <p className="text-sm">{UserGreetings}</p>
        {Buttons}
      </div>
    </header>
  );
};
