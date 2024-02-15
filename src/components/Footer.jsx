import logoText from '@/svg/logo_text.svg'
import Image from "next/image";
import { LogoWithText } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] p-[0.625rem] h-[15rem] flex flex-col items-center justify-center">
      <LogoWithText />
      <p className="font-bold text-sm">© 2024 Hackhive</p>
    </footer>
  )
}