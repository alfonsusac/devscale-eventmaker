import { EventDashboard } from "@/components/EventDashboard";
import { requestEventList } from "@/lib/fetchAPI";
import { session } from "@/lib/server-session";
import toast from "react-hot-toast";

export default async function Dashboard() {
  const { userData } = session();
  const authorID = userData.id;

  let events;
  try {
    const { data } = await requestEventList();
    const userEvent = data.filter((item) => item.events.author === authorID);
    events = userEvent;
  } catch (error) {
    toast.error("Error fetching event list:", error);
  }

  return <EventDashboard events={events} userData={userData}/>;
}
