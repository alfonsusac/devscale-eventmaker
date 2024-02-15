import { RegisterForm } from "./components/RegisterForm";
import Image from 'next/image'

export default function Register() {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-20">
        <RegisterForm />
      </section>
      <div className="relative overflow-hidden bg-black hidden md:block">
        <Image
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=1&w=1920"
          alt="Conference Image"
          fill sizes="50vw"
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
    </>
  );
}
