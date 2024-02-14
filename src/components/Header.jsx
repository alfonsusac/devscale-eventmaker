"use client";

import { HeaderButtons } from "@/components/HeaderButtons";
import Link from "next/link";

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
    <header className="flex justify-between p-3">
      <Link href="/">
        <h3 className="text-base font-bold">eventMakers.</h3>
      </Link>
      <div className="flex space-x-2 items-center">
        <p className="text-sm">{UserGreetings}</p>
        {Buttons}
      </div>
    </header>
  );
};
