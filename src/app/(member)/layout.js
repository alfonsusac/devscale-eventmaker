import { HeaderDashboard } from "@/components/Header"
import { session } from "@/lib/server-session"

export default function DashboardLayout({ children }) {
  const s = session()
  return (
    <>
      <HeaderDashboard session={s} />
      <section className="flex flex-col items-stretch px-5 mt-8 lg:mt-16">
        {children}
      </section>
    </>
  )
}
