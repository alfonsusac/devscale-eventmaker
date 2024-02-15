"use client";
import { React, useState } from "react";
import Link from "next/link";
import { requestDeleteEvent } from "@/lib/fetchAPI";
import { session } from "@/lib/session";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const DeleteEvent = ({ eventid, image, title, dateTime }) => {
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
        router.refresh();
      }, 2000);
    } catch (error) {
      console.error("Failed to delete event: ", error);
      toast.error("Failed to delete event");
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center m-auto  gap-5">
      <Link href={"/dashboard"}>
        <button className="button">{'< '}Back</button>
      </Link>

      <h1 className="pagetitle mb-0">Delete Event</h1>
      <p className="font-medium">Are you sure you want to delete this Event? This action cannot be undone</p>


      <div className="mt-9 border border-gray-200 rounded-lg px-7 py-9 max-w-screen-sm w-full flex flex-col items-center">
        <div className="w-36 rounded-md overflow-hidden">
          <Image
            src={image}
            alt="event image"
            width={500}
            height={500}
            unoptimized={true}
            className="h-full w-full object-cover"
          />
        </div>

        <h2 className="font-bold mt-4 text-xl">{title}</h2>
        <p className="font-semibold text-black/60">Event Date : {dateTime}</p>
      </div>


      <div className="flex gap-3 mt-9">
        <button className="button  w-48 h-10">
          Nah
        </button>
        <button
          className="button btn-primary w-48 h-10"
          onClick={handleDeleteEvent}
        >
          {loading ? "Deleting..." : "Yes, please"}
        </button>
      </div>

    </div>
  );
};
