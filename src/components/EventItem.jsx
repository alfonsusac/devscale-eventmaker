import { requestUser } from "@/lib/fetchAPI";
import { EventItemAuthor } from "./EventItemAuthor";
import Link from "next/link";

export const EventItem = async ({ events }) => {
  return (
    <div className="shadow-xl rounded-xl">
      <div className="bg-[url('/event-image.png')] h-32 bg-cover bg-center rounded-t-xl"></div>
      <div className="flex flex-col p-4">
        <div className=" flex flex-col gap-3">
          <p className="text-2xl bold text-black whitespace-nowrap overflow-hidden overflow-ellipsis">
            {events.title}
          </p>
          <p className="text-gray-500">{events.dateTime}</p>
        </div>
        <div className="divider"></div>
        <EventItemAuthor userid={events.author} />
        <div className="divider"></div>
        <Link href={`/${events.id}`}>
          <button className="btn btn-primary">Detail Event</button>
        </Link>
      </div>
    </div>
  );
};
