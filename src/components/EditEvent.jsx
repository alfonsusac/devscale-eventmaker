"use client";

import React, { useState } from "react";
import Link from "next/link";

export const EditEvent = ({ event }) => {
  const [prop, setProp] = useState({
    title: "",
    desc: "",
    dateTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProp((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleEditEvent() {
    e.preventDefault();
    const userFromLs = localStorage.getItem("user");
    const userData = JSON.parse(userFromLs);

    const title = e.target.title.value;
    const desc = e.target.description.value;
    const eventDate = e.target.eventdate.value;
    const author = userData.id;
  }
  return (
    <div className="flex flex-col items-center justify-center m-auto  gap-5">
      <h1 className="text-2xl font-semibold">Edit Event</h1>
      <div className="flex flex-col items-center justify-center space-y-2 w-[50vw]">
        <form onSubmit={handleEditEvent} className="flex flex-col gap-4 w-80">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={prop.title}
            onChange={handleInputChange}
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />
          <textarea
            className="textarea textarea-bordered textarea-primary"
            name="description"
            value={prop.desc}
            onChange={handleInputChange}
            placeholder="Description"
          ></textarea>

          <input
            type="date"
            name="eventdate"
            placeholder="Event Date"
            value={prop.dateTime}
            onChange={handleInputChange}
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />

          <button className="btn btn-sm btn-primary">Submit</button>
        </form>
        <Link href={"/dashboard"}>
          <button className="btn btn-sm btn-outline btn-secondary">Back</button>
        </Link>
      </div>
    </div>
  );
};
