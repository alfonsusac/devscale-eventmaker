import { RegisterForm } from "./components/RegisterForm";
import Image from 'next/image'

export default function Register() {
  return (
    <>
      <RegisterForm />
      <div className="relative overflow-hidden bg-black hidden md:block">
        <Image
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=1&w=1920"
          alt="Conference Image"
          fill sizes="50vw"
          objectFit="cover"
        />
      </div>
    </>
  );
}
