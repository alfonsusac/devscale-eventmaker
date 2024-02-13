import { DeleteEvent } from "@/components/DeleteEvent";
import { requestEvent } from "@/lib/fetchAPI";
import { session } from "@/lib/server-session";

export default async function Delete({ params }) {
  const { eventid } = params;
  const { token } = session();
  const { events } = await requestEvent(token, eventid);

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
