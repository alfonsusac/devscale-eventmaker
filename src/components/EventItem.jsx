import { EventItemAuthor } from "./EventItemAuthor";
import Link from "next/link";
import Image from "next/image";

export const EventItem = async ({ events }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-lg">
      <div className="h-40 max-h-[500px] bg-cover bg-center rounded-t-xl">
        <Image
          src={events.image}
          alt="event image"
          width={500}
          height={500}
          unoptimized={true}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="divider"></div>
      <div className="flex flex-col justify-center space-y-3 p-3">
        <div className="space-y-2">
          <h2 className="h-12 text-md font-semibold">{events.title}</h2>
          <p className="text-sm text-gray-400 line-clamp-3">
            {events.description}
          </p>
        </div>
        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-600">
              Organized by : <EventItemAuthor userid={events.author} />
            </p>
            <p className="text-sm text-gray-600">
              Show Time : {events.dateTime}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Link href={`/${events.id}`}>
              <button className="btn btn-success btn-sm w-full">
                Detail Event
              </button>
            </Link>
            <Link href={`/dashboard/edit/${events.id}`}>
              <button className="btn btn-primary btn-sm w-full">
                Edit Event
              </button>
            </Link>
            <Link href={`/dashboard/delete/${events.id}`}>
              <button className="btn btn-error btn-sm w-full">
                Delete Event
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
