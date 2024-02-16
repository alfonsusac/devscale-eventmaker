import React from "react";
import Image from "next/image";
import { EventItemAuthor } from "@/components/EventItemAuthor";
import Link from "next/link";
import { session } from "@/lib/server-session";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";

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
        alt="event image"
        width={1024}
        height={512}
        unoptimized={true}
        className="h-full w-full object-cover bg-zinc-100 rounded-3xl"
      />

      <div className="flex flex-col gap-4
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

        <h1 className="font-bold text-4xl mt-16">
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
          <p>Show time: {event?.events.dateTime}</p>
        </section>

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
