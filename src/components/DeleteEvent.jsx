"use client";
import { React, useState } from "react";
import Link from "next/link";

export const DeleteEvent = () => {
  const [prop] = useState({
    title: "",
    desc: "",
    dateTime: "",
  });
  function handleDeleteEvent() {}
  return (
    <div className="flex flex-col items-center justify-center m-auto  gap-5">
      <h1 className="text-2xl font-semibold">Delete Event</h1>
      <div className="flex flex-col items-center justify-center space-y-2 w-[50vw]">
        <div className="flex flex-col gap-4 w-80">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={prop.title}
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />
          <textarea
            className="textarea textarea-bordered textarea-primary"
            name="description"
            value={prop.desc}
            placeholder="Description"
          ></textarea>

          <input
            type="date"
            name="eventdate"
            placeholder="Event Date"
            value={prop.dateTime}
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />

          <button
            className="btn btn-sm btn-primary"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Delete
          </button>
        </div>
        <Link href={"/dashboard"}>
          <button className="btn btn-sm btn-outline btn-secondary">Back</button>
        </Link>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <p className="py-4">Are you sure to delete the data ?</p>
          <div className="modal-action">
            <form method="dialog" className="space-x-2">
              <button className="btn btn-error" onClick={handleDeleteEvent}>
                Delete
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
