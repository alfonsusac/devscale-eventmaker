import React from "react";
import Image from "next/image";
import Avatar from "boring-avatars";
import { EventItemAuthor } from "@/components/EventItemAuthor";
import Link from "next/link";
import { session } from "@/lib/server-session";

export default function EventSingle({ event }) {
  const sessionData = session();
  const token = sessionData && sessionData.token ? sessionData.token : null;

  return (
    <div className="w-[500px] flex flex-col gap-4 m-4">
      <Link href="/">
        <p> ◀ Back to Home</p>
      </Link>
      <Image
        src={event.events.image}
        alt="event image"
        width={500}
        height={500}
        unoptimized={true}
        className="h-full w-full object-cover"
      />
      <div className="flex w-[100%] flex-col">
        <div className="flex flex-col p-4 gap-4">
          <p>Show time: {event.events.dateTime}</p>
          <h1>{event.events.title}</h1>
          <p>{event.events.description}</p>
          {token && (
            <p>
              Author: <EventItemAuthor userid={event.events.author} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
