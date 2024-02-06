import { requestEventList } from "@/lib/fetchAPI";
import { EventItem } from "./EventItem";

export const AllEvents = async () => {
  //token for retrieve all events for guest
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRzX0djR2RtMERWcEJaUUJOOSIsIm5hbWUiOiJSaXphIiwiZW1haWwiOiJtZUByaXphbWF1bGFuYS5jb20iLCJhdmF0YXIiOm51bGwsImlhdCI6MTcwNzE5MDIwMSwiZXhwIjoxNzE3NTU4MjAxfQ.riLvaqrnJ_VYig8_DxdcsB6zhiAF00VC8lYSSJiBP2Y";

  let events;
  try {
    const { data } = await requestEventList(token);
    events = data;
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
