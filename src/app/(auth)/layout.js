import { Footer } from "@/components/Footer";

export default function AuthLayout({ children }) {
  return (
    <main>
      <div className="
        min-h-screen flex items-stretch justify-center 
        [&>*]:flex-1
        [&>section>*]:w-full
      ">
        {children}
      </div>
      <Footer />
    </main>
  )
}