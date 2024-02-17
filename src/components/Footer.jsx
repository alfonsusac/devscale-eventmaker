import { LogoWithText } from './Logo';
import Link from "next/link";


export const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] p-[0.625rem] h-[15rem] flex flex-col items-center justify-center">
      <LogoWithText />
      <p className="font-bold text-sm">© 2024 Hackhive</p>
    </footer>
  )
}

export const FooterCTOVersion = () => {
  return (
    <footer className="bg-[#f7f7f7] p-[0.625rem] h-[26rem] flex flex-col items-center justify-center">
      <p className='font-semibold text-[#7d7d7d]'>
        Powered by
      </p>
      <div className='mt-3'>
        <LogoWithText />
      </div>
      <Link href={'/dashboard'} className='button btn-primary w-64 mt-5'>
        Create your first event {'>'}
      </Link>
      <p className="font-bold text-sm mt-8 text-[#7d7d7d]">
        © 2024 Hackhive
      </p>
    </footer>
  )
}