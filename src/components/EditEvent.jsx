"use client";

import React, { useState } from "react";
import Link from "next/link";
import { session } from "@/lib/session";
import { requestEditEvent } from "@/lib/fetchAPI";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const EditEvent = ({ event }) => {
  const { events } = event;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [prop, setProp] = useState({
    title: `${events.title}`,
    desc: `${events.description}`,
    image: `${events.image}`,
    dateTime: `${events.dateTime}`,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProp((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function handleEditEvent(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const { user, token } = session();
      const author = user.id;
      const eventID = events.id;

      const title = e.target.title.value;
      const description = e.target.description.value;
      const dateTime = e.target.eventdate.value;
      const image = e.target.image.value;

      await requestEditEvent(
        token,
        author,
        eventID,
        title,
        description,
        image,
        dateTime
      );

      toast.success("Event updated successfully");
      router.replace("/dashboard");
      router.refresh();
      setLoading(false);
    } catch (error) {
      toast.error("An error occurred while updating the event");
      console.error(error);
      setLoading(false);
    }
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
            type="text"
            name="image"
            value={prop.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="date"
            name="eventdate"
            placeholder="Event Date"
            value={prop.dateTime}
            onChange={handleInputChange}
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />

          <button className="btn btn-sm btn-primary">
            {loading ? "Updating..." : "Submit"}
          </button>
        </form>
        <Link href={"/dashboard"}>
          <button className="btn btn-sm btn-outline btn-secondary">Back</button>
        </Link>
      </div>
    </div>
  );
};
