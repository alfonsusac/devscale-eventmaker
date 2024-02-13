import { DeleteEvent } from "@/components/DeleteEvent";
import { requestEvent } from "@/lib/fetchAPI";

export default async function Delete({ params }) {
  const { eventid } = params;
  const { events } = await requestEvent(eventid);

  return (
    <div>
      <DeleteEvent
        eventid={eventid}
        title={events.title}
        dateTime={events.dateTime}
      />
    </div>
  );
}
