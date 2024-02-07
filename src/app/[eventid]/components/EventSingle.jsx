import React from "react";
import Image from "next/image";
import Avatar from "boring-avatars";
import { EventItemAuthor } from "@/components/EventItemAuthor";
import Link from "next/link";

export default function EventSingle({ events }) {
  return (
    <div className="w-[500px] flex flex-col gap-4 m-4">
      <Link href="/">
        <p> ◀ Back to Home</p>
      </Link>
      <Image
        src="/event-image.png"
        alt="event image"
        width={500}
        height={500}
      />
      <div className="flex w-[100%]">
        <div className="flex flex-col w-[70%] p-4">
          <h1>{events.title}</h1>
          <p>{events.description}</p>
        </div>
        <div className="border-yellow-500 border-solid border-2 w-[30%] flex flex-col items-center text-center p-4">
          <Avatar
            size={40}
            name="Ida B"
            variant="beam"
            colors={["#F19601", "#F21F26", "#251819", "#EBC83A", "#73B295"]}
          />
          <p>
            <EventItemAuthor userid={events.author} />
          </p>
        </div>
      </div>
    </div>
  );
}
