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
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create event");
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center m-auto  gap-5">
      <h1 className="text-2xl font-semibold">Create Event</h1>
      <div className="flex flex-col items-center justify-center space-y-2 w-[50vw]">
        <form onSubmit={handleCreateEvent} className="flex flex-col gap-4 w-80">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />
          <textarea
            className="textarea textarea-bordered textarea-primary"
            name="description"
            placeholder="Description"
          ></textarea>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="date"
            name="eventdate"
            placeholder="Event Date"
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />

          <button className="btn btn-sm btn-primary">
            {loading ? "Creating..." : "Create"}
          </button>
        </form>
        <Link href={"/dashboard"}>
          <button className="btn btn-sm btn-outline btn-secondary">Back</button>
        </Link>
      </div>
    </div>
  );
};
