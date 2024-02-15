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
    description: `${events.description}`,
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
      const dateTime = e.target.dateTime.value;
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
    <div className="max-w-screen-sm w-full flex flex-col m-auto gap-5">
      <Link href={"/dashboard"}>
        <button className="button">{'<'} Back</button>
      </Link>
      <h1 className="pagetitle">
        Edit Event
      </h1>
      <form className="flex flex-col gap-6" onSubmit={handleEditEvent}>

        <fieldset>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={prop.title}
            onChange={handleInputChange}
            className="input input-bordered"
          />
        </fieldset>

        <fieldset>
          <label>Description</label>
          <textarea
            className="textarea textarea-bordered"
            name="description"
            value={prop.description}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={prop.image}
            onChange={handleInputChange}
            className="input input-bordered"
          />
        </fieldset>

        <fieldset>
          <label>Date</label>
          <input
            type="date"
            name="dateTime"
            value={prop.dateTime}
            onChange={handleInputChange}
            className="input input-bordered"
          />
        </fieldset>

        <button className="button btn-primary self-end px-6 text-base mt-4">
          {loading ? "Updating..." : "Update Event"}
        </button>
        
      </form>

    </div >
  );
};
