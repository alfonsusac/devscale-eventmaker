import { Header } from "@/components/Header";
import { session } from "@/lib/server-session";

export default function GuestLayout({ children }) {
  const userSession = session();

  return (
    <>
      <Header session={userSession} />
      {children}
    </>
  )
}