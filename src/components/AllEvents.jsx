import { requestEventList } from "@/lib/fetchAPI";
import { EventItem } from "./EventItem";

export const AllEvents = async () => {
  let events;
  try {
    const { data } = await requestEventList();
    events = data.reverse();
  } catch (error) {
    console.error("Error fetching event list:", error);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {events &&
        events.map(({ events }) => (
          <EventItem key={events.id} events={events} />
        ))}
    </div>
  );
};
