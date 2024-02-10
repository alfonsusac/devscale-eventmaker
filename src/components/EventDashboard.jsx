import React from "react";
import Image from "next/image";
import { requestEventList } from "@/lib/fetchAPI";
import { EventItem } from "./EventItem";

export const EventDashboard = async () => {
  let events;
  try {
    const { data } = await requestEventList();
    events = data;
  } catch (error) {
    console.error("Error fetching event list:", error);
  }

  return (
    <main className="max-w-6xl m-auto">
      <section className="flex justify-center mb-10">
        <div className="flex flex-col justify-center space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">EventMaker</h2>
            <p className="text-base text-gray-400">
              Best event listing in Indonesia
            </p>
          </div>
          <button className="btn btn-secondary">Create New Event</button>
        </div>
      </section>
      <section className="grid grid-cols-4 gap-5">
        {events &&
          events.map(({ events }) => (
            <EventItem key={events.id} events={events} />
          ))}
      </section>
    </main>
  );
};
