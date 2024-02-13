"use client";
import { React, useState } from "react";
import Link from "next/link";
import { requestDeleteEvent } from "@/lib/fetchAPI";
import { session } from "@/lib/session";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const DeleteEvent = ({ eventid, title, dateTime }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleDeleteEvent() {
    try {
      setLoading(true);
      const { token } = session();
      await requestDeleteEvent(token, eventid);
      setTimeout(() => {
        toast.success("Event deleted successfully");
        setLoading(false);
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Failed to delete event: ", error);
      toast.error("Failed to delete event");
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center m-auto  gap-5">
      <h1 className="text-2xl font-semibold">Delete Event</h1>
      <p>Are you sure you want to delete this event? </p>
      <div className="flex flex-col items-center justify-center space-y-2 w-[50vw]">
        <div className="gap-4 space-y-4 w-80">
          <div className="border border-gray-300 rounded-lg p-3">
            <h2 className="font-bold">{title}</h2>
            <p>Event Date : {dateTime}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              className="btn btn-sm btn-error"
              onClick={handleDeleteEvent}
            >
              {loading ? "Deleting..." : "Delete"}
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
