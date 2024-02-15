import { EditEvent } from "@/components/EditEvent";
import React from "react";
import { requestEvent } from "@/lib/fetchAPI";

export default async function Edit({ params }) {
  const { eventid } = params;

  const event = await requestEvent(eventid);

  return (
    <EditEvent event={event} />
  );
}
