import React from "react";
import Image from "next/image";
import Avatar from "boring-avatars";
import { EventItemAuthor } from "@/components/EventItemAuthor";
import Link from "next/link";

export default function EventSingle({ event }) {
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
      <div className="flex w-[100%]">
        <div className="flex flex-col w-[70%] p-4">
          <h1>{event.events.title}</h1>
          <p>{event.events.description}</p>
        </div>
        <div className="border-yellow-500 border-solid border-2 w-[30%] flex flex-col items-center text-center p-4 max-h-52 gap-4">
          <Avatar
            size={40}
            name="Ida B"
            variant="beam"
            colors={["#F19601", "#F21F26", "#251819", "#EBC83A", "#73B295"]}
          />
          <p>
            <EventItemAuthor userid={event.events.author} />
          </p>
          <p>{event.events.dateTime}</p>
        </div>
      </div>
    </div>
  );
}
