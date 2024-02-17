import { requestEvent } from "@/lib/fetchAPI";
import EventSingle from "./components/EventSingle";
import { FooterCTOVersion } from "@/components/Footer";

export default async function Event({ params }) {
  const { eventid } = params;
  const event = await requestEvent(eventid);

  return (
    <>
      <section className="p-8 mb-32">
        <EventSingle event={event} />
      </section>
      <FooterCTOVersion />
    </>
  );
}
