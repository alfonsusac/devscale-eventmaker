import { requestEventList } from "@/lib/fetchAPI";
import EventSingle from "./components/EventSingle";

export default async function Event({ params }) {
  const { eventid } = params;
  const { data } = await requestEventList();
  const { events } = data.find((item) => item.events.id === eventid);

  return (
    <div className="flex justify-center items-center">
      <EventSingle events={events} />
    </div>
  );
}
