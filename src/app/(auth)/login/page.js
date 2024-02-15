import { LoginForm } from "./components/LoginForm";
import Image from 'next/image'

export default function Login() {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-10">
        <LoginForm />
      </section>
      <div className="relative overflow-hidden bg-black hidden md:block">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=1&w=1920"
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
