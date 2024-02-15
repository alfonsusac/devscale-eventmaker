import logoText from '@/svg/logo_text.svg'
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] p-[0.625rem] h-[15rem] flex flex-col items-center justify-center">
      <Image unoptimized src={logoText} alt="EventMakers" width={188} height={40} />
      <p className="font-bold text-sm">© 2024 Hackhive</p>
    </footer>
  )
}