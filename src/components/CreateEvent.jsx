"use client";

import Link from "next/link";
import { session } from "@/lib/session";
import { requestCreateEvent } from "@/lib/fetchAPI";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useState } from "react";

export const CreateEvent = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleCreateEvent(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const { user, token } = session();
      const formData = new FormData(e.target);
      const title = formData.get("title");
      const description = formData.get("description");
      const dateTime = formData.get("eventdate");
      const image = formData.get("image");

      await requestCreateEvent(
        token,
        user.id,
        title,
        description,
        image,
        dateTime
      );

      toast.success("Event created successfully");
      router.replace("/dashboard");
      router.refresh();
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create event");
      setLoading(false);
    }
  }
  return (
    <main className="max-w-screen-sm w-full flex flex-col m-auto gap-5">
      <Link href={"/dashboard"}>
        <button className="button">{'<'} Back</button>
      </Link>
      <h1 className="pagetitle">
        Create Event
      </h1>
      <form className="flex flex-col gap-6" onSubmit={handleCreateEvent} >

        <fieldset>
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="input input-bordered"
            required
          />
        </fieldset>

        <fieldset>
          <label>Description</label>
          <textarea
            className="textarea textarea-bordered"
            name="description"
            required
          />
        </fieldset>

        <fieldset>
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            className="input input-bordered"
          />
        </fieldset>

        <fieldset>
          <label>Date</label>
          <input
            type="date"
            name="eventdate"
            className="input input-bordered"
            required
          />
        </fieldset>

        <button className="button btn-primary self-end px-6 text-base mt-4">
          {loading ? "Creating..." : "Create Event"}
        </button>

      </form>

    </main>
  );
};
