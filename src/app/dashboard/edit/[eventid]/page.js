import { EditEvent } from "@/components/EditEvent";
import React from "react";
import { requestEventList } from "@/lib/fetchAPI";

export default async function Edit({ params }) {
  const { eventid } = params;
  const { data } = await requestEventList();
  const { event } = data.find((item) => item.events.id === eventid);
  console.log(event);
  return (
    <div>
      <EditEvent event={event} />
    </div>
  );
}
