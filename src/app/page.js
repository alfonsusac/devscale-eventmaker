import Image from "next/image";
import { AllEvents } from "@/components/AllEvents";

// Event Catalog Page
//
// relevant user stories:
// - as a guest, i'd like to be able to seel all events

export default function Home() {
  return (
    <main>
      Hello World, This is Hackhive
      <AllEvents />
    </main>
  );
}
