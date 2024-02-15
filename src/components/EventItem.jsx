import { EventItemAuthor } from "./EventItemAuthor";
import Link from "next/link";
import Image from "next/image";

export const EventItem = async ({ events }) => {
  return (
    <div className="h-16 overflow-hidden flex gap-3 items-center bg-yellow-200">

      <div className="w-24 bg-cover bg-center rounded-md overflow-hidden">
        <Image
          src={events.image}
          alt="event image"
          width={500}
          height={500}
          unoptimized={true}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col grow bg-yellow-300">
        <h2 className="font-semibold">
          {events.title}
        </h2>
        <p className="text-sm text-gray-600">
          Show Time : {events.dateTime}
        </p>
      </div>

      <div className="flex gap-2">
        <Link href={`/${events.id}`}>
          <button className="button btn-success w-full">
            Detail Event
          </button>
        </Link>
        <Link href={`/dashboard/edit/${events.id}`}>
          <button className="button w-full">
            Edit Event
          </button>
        </Link>
        <Link href={`/dashboard/delete/${events.id}`}>
          <button className="button w-full">
            Delete Event
          </button>
        </Link>
      </div>
    </div>
  );
};
