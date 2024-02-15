import React from "react";
import { EventItem } from "./EventItem";
import Link from "next/link";

export const EventDashboard = ({ events, userData }) => {
  return (
    <main className="max-w-screen-md w-full m-auto ">

      <header className="flex gap-5 items-center mb-10 w-full ">
        <h1 className="pagetitle">
          Hello, {userData.name}
        </h1>
        <Link href={`/dashboard/create`}>
          <button className="button btn-primary">Create New Event</button>
        </Link>
      </header>

      <section className="flex flex-col gap-5 ">
        {events && events.length > 0 ?
          <>
            <h2 className="font-semibold text-2xl tracking-tight">
              My events
            </h2>
            {
              events.map(({ events }) => (
                <EventItem key={events.id} events={events} />
              ))
            }
          </>
          : (
            <p className="text-black font-medium">
              You have no events created. <Link className="text-blue-600 hover:underline" href={'/dashboard/create'}>Create a new event</Link>
            </p>
          )
        }
      </section>
    </main>
  );
};
