import { requestEvent } from "@/lib/fetchAPI";
import EventSingle from "./components/EventSingle";

export default async function Event({ params }) {
  const { eventid } = params;
  const event = await requestEvent(eventid);

  return (
    <div className="flex justify-center items-center">
      <EventSingle event={event} />
    </div>
  );
}
