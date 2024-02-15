import Image from "next/image";
import { AllEvents } from "@/components/AllEvents";

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
        <p className="pt-[1.625rem] max-w-3xl">
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
    </main>
  )
}
