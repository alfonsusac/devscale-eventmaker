import Image from "next/image";
import Link from "next/link"
import { AllEvents } from "@/components/AllEvents";
import logoText from '@/svg/logo_text.svg'

// Event Catalog Page
//
// relevant user stories:
// - as a guest, i'd like to be able to seel all events

export default function Home() {
  return (
    <main>
      <section className="
        pt-[3.5rem] max-w-[56.25rem] mx-auto text-center px-[1.25px]
        [&_h1]:font-extrabold
        [&_h1]:text-[4rem]
        [&_h1]:tracking-tighter
        [&_h1]:leading-none

        [&_p]:font-semibold
        [&_p]:text-2xl
        [&_p]:tracking-tight
        pb-[4rem]
      ">
        <h1>
          Craft, Share, Experience. <br />
          Elevate Your Events.
        </h1>
        <p className="pt-[1.625rem] max-w-3xl mx-auto">
          Eventmaker is your go-to app for discovering, tracking, and attending all the hottest events in your area.
        </p>
      </section>

      <section className="px-14 pt-14 pb-24">
        <div className="
          max-w-screen-xl mx-auto flex flex-col gap-7
          [&_h2]:font-semibold
          [&_h2]:text-3xl
        ">
          <h2>
            All Events
          </h2>
          <AllEvents />
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="rounded-[3rem] bg-[#2A225B] text-center text-white
          px-[1.25rem] py-[5rem]
        ">
          <h2>🎉<br />Ready to Make your Mark on the Event Schene?</h2>
          <p>Don&apos;t miss out on the opportunity to host an unforgettable event. Log in now and let&apos;s get started!</p>
          <Link className="button btn-primary" href={'/dashboard'}>
            {'Create your first event ->'}
          </Link>
          <p>
            {"Let's make your event dreams a reality!"}
          </p>
        </div>
      </section>

      <footer className="bg-[#f7f7f7] p-[0.625rem] h-[15rem] flex flex-col items-center justify-center">
        <Image unoptimized src={logoText} alt="EventMakers" width={188} height={40} />
        <p className="font-bold text-sm">© 2024 Hackhive</p>
      </footer>
    </main>
  )
}
