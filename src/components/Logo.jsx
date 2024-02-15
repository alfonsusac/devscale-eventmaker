
import Image from 'next/image'
import logoText from '@/svg/logo_text.svg'

export const LogoWithText = () => {
  return (
    <Image unoptimized src={logoText} alt="EventMakers" width={188} height={40} />
  )
}