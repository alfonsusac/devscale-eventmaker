import Image from "next/image";
import Link from "next/link"
import { AllEvents } from "@/components/AllEvents";
import { Footer } from "@/components/Footer";
import heroBG from "@/svg/wavy-bg-1.svg"
import ctoBG from "@/svg/gradient-bg-1.svg"

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
        [&_h1]:leading-[1.1]

        [&_p]:font-semibold
        [&_p]:text-2xl
        [&_p]:tracking-tight
        pb-[4rem]
      ">
        <Image src={heroBG} alt="" className="max-w-none absolute top-0 left-1/2 -translate-x-1/2 -z-10" />
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
        <div className="relative rounded-[3rem] overflow-hidden text-center text-white
          px-[1.25rem] py-[5rem] max-w-screen-xl mx-auto
          flex flex-col items-center

          [&_h2]:text-5xl
          [&_h2]:font-extrabold
          [&_h2]:tracking-tight
          [&_h2]:leading-[1.2]
        ">
          <h2 className="max-w-[35rem]">
            🎉<br />Ready to Make your Mark on the Event Schene?
          </h2>
          <p className="pt-3 text-xl">
            Don&apos;t miss out on the opportunity to host an unforgettable event. Log in now and let&apos;s get started!
          </p>
          <Link className="button btn-primary mt-12 h-[2.625rem] w-[17rem] text-base" href={'/dashboard'}>
            {'Create your first event'}<PhArrowRightBold />
          </Link>
          <p className="pt-5 text-sm">
            {"Let's make your event dreams a reality!"}
          </p>
          <div className="absolute flex left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-red-50 -z-10">
            <Image src={ctoBG} alt="" className="absolute left-[-68.125rem] top-[-49.938rem] -z-10 bg-[#2A225B] max-w-none" />
          </div>
        </div>
      </section>

      <Footer />

    </main>
  )
}



export function PhArrowRightBold(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01"></path></svg>
  )
}