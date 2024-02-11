"use client";
import { React, useState } from "react";
import Link from "next/link";

export const DeleteEvent = () => {
  const [prop] = useState({ // Todo: no longer need this
    title: "",
    desc: "",
    dateTime: "",
  });
  function handleDeleteEvent() {}
  return (
    <div className="flex flex-col items-center justify-center m-auto  gap-5">
      <h1 className="text-2xl font-semibold">Delete Event</h1>
      <p>Are you sure you want to delete this event? </p>
      <div className="flex flex-col items-center justify-center space-y-2 w-[50vw]">
        <div className="gap-4 space-y-4 w-80">
          <div className="border border-gray-300 rounded-lg p-3">
            <h2 className="font-bold">Event Title</h2>
            <p>Event Date : 11 Feb 2024</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              className="btn btn-sm btn-error"
              onClick={handleDeleteEvent}
            >
              Delete
            </button>
            <button className="btn btn-sm btn-default">Cancel</button>
          </div>
        </div>
        <Link href={"/dashboard"}>
          <button className="btn btn-sm btn-outline btn-secondary">Back</button>
        </Link>
      </div>
    </div>
  );
};
