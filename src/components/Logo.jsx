
import Image from 'next/image'
import logoText from '@/svg/logo_text.svg'
import logo from '@/svg/logo.svg'

export const LogoWithText = () => {
  return (
    <Image src={logoText} alt="EventMakers Logo with text"/>
  )
}

export const Logo = () => {
  return (
    <Image src={logo} alt="EventMakers Logo" />
  )
}