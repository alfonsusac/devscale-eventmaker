"use client";

import { HeaderButtons } from "@/components/HeaderButtons";
import Link from "next/link";
import Image from 'next/image'

import logoText from '@/svg/logo_text.svg'

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
        <Image unoptimized src={logoText} alt="EventMakers" width={188} height={40}/>
      </Link>
      <div className="flex space-x-2 items-center">
        <p className="text-sm">{UserGreetings}</p>
        {Buttons}
      </div>
    </header>
  );
};
