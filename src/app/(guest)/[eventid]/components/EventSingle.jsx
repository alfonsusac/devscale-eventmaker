import React from "react";
import Image from "next/image";
import { session } from "@/lib/server-session";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { ShareButton } from "./ShareButton";

export default function EventSingle({ event }) {
  const sessionData = session();
  const token = sessionData && sessionData.token ? sessionData.token : null;
  const avatar = createAvatar(lorelei, {
    seed: "Jasper",
    backgroundColor: ["ffdfbf"],
    size: 32,
  });
  const svg = avatar.toString();

  return (
    <div className="max-w-screen-md w-full mx-auto flex flex-col items-start

    ">

      <div className="bg-indigo-50 bg-gradient-to-t from-indigo-50 to-white max-w-screen-xl w-full h-72 lg:h-96 rounded-b-[3rem] absolute top-0 left-1/2 -translate-x-1/2 -z-10" />
      <Image
        src={event?.events.image}
        alt="Event Image"
        width={1024}
        height={512}
        unoptimized={true}
        className="h-full w-full object-cover bg-zinc-100 rounded-3xl
        relative block
        after:absolute
        after:inset-0
        after:bg-zinc-200
        after:w-full
        after:h-full
        after:block
        after:bg-gradient-to-br
        after:from-pink-100
        after:to-red-200
        shadow-black/10 shadow-2xl
        "
      />

      <div className="flex flex-col lg:flex-row gap-y-20 gap-x-4 w-full items-start mt-16">

        <article className="flex flex-col gap-4 grow w-full
        [&>section]:mt-6
        [&>section]:flex
        [&>section]:flex-col
        [&>section]:gap-5

        [&_h2]:font-bold
        [&_h2]:text-xl
        [&_h2]:text-black/80

        [&_p]:font-medium
        [&_p]:leading-relaxed
        ">

          <h1 className="font-bold text-4xl">
            {event?.events.title}
          </h1>

          <section>
            <h2>
              Description
            </h2>
            <p>{event?.events.description}</p>
          </section>

          <section>
            <h2>
              Date
            </h2>
            <p>{event?.events.dateTime}</p>
          </section>

        </article>

        <aside className="lg:max-w-72
          
          flex flex-col gap-3 w-full
          [&_p]:text-base
          [&_p]:font-medium
        ">
          <div className="flex w-full 
            p-5 rounded-md shadow-[0_0_2.4px_0px_rgba(0,0,0,0.25)]
            [&>div]:flex
            [&>div]:gap-2
            [&>div]:items-center
          ">
            <div className="">
              <PhCalendarBlankBold className="text-2xl text-primary flex-none" />
              <p>{event?.events.dateTime}</p>
            </div>
          </div>

          <div className="ml-6 font-medium mt-5 flex">
            <ShareButton
              title={event?.events.title}
              text={"Powered by eventmaker"}
            />
          </div>
        </aside>

      </div>


      {/* {token && (
        <div className="flex flex-col gap-3">
          <p>Penyelenggara:</p>
          <div className="flex gap-2 items-center">
            <div dangerouslySetInnerHTML={{ __html: svg }} />
            <p>
              <EventItemAuthor userid={event?.events.author} />
            </p>
          </div>
        </div>
      )} */}
    </div>
  );
}

export function PhCalendarBlankBold(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Z"></path></svg>
  )
}

