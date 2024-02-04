import React from "react";

export default function Dashboard() {
  return (
    <main className="max-w-6xl m-auto">
      <section className="flex justify-center">
        <h2>EventMaker</h2>
        <h4>Best event listing in Indonesia</h4>
        <button>Create New Event</button>
      </section>
      <section className="grid grid-cols-4 gap-4">
        <div className="border-2 rounded-md">card1</div>
        <div className="border-2 rounded-md">card2</div>
        <div className="border-2 rounded-md">card3</div>
        <div className="border-2 rounded-md">card4</div>
      </section>
    </main>
  );
}
