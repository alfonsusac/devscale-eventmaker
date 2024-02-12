"use client";

import { useRouter } from "next/navigation";
import { HeaderButtons } from "@/components/HeaderButtons";

export const Header = ({ session }) => {
  const router = useRouter();

  let UserGreetings;
  let Buttons;

  if (!session) {
    Buttons = <HeaderButtons type="Guest" />;
  } else {
    UserGreetings = <p className="text-sm">Hi, Mafatikhul Ilmi !</p>;
    Buttons = <HeaderButtons type="User" />;
  }

  return (
    <header className="flex justify-between p-3">
      <h3 className="text-base font-bold">eventMakers.</h3>
      <div className="flex space-x-2 items-center">
        {UserGreetings}
        {Buttons}
      </div>
    </header>
  );
};
