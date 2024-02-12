"use client";

import { useRouter } from "next/navigation";
import { LoginButton, LogoutButton } from "@/components/HeaderButtons";

export const Header = ({ session }) => {
  const router = useRouter();

  let userButton;
  if (!session) {
    userButton = <LoginButton />;
  } else {
    userButton = <LogoutButton />;
  }

  return (
    <header className="flex justify-between p-3">
      <h3 className="text-base font-bold">eventMakers.</h3>
      <div className="flex space-x-2 items-center">
        <p className="text-sm">Hi, Mafatikhul Ilmi !</p>
        {userButton}
      </div>
    </header>
  );
};
