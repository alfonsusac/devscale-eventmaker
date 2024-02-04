import React from "react";
import Image from "next/image";

export const DashboardPage = () => {
  return (
    <main className="max-w-6xl m-auto">
      <section className="flex justify-center mb-10">
        <div className="space-y-5">
          <div>
            <h2>EventMaker</h2>
            <h4>Best event listing in Indonesia</h4>
          </div>

          <button>Create New Event</button>
        </div>
      </section>
      <section className="grid grid-cols-4 gap-4">
        <div className="card space-y-4">
          <Image
            alt="event image"
            src={"http://via.placeholder.com/640x360"}
            width={640}
            height={360}
          />
          <div className="space-y-2">
            <h2 className="text-md font-semibold">Lorem Ipsum</h2>
            <p className="text-sm">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Organized by : Mafatikhul Ilmi
            </p>
            <p className="text-sm text-gray-600">
              Show Time : Sunday, 4 Feb 2024
            </p>
          </div>
        </div>
        <div className="card space-y-4">
          <Image
            alt="event image"
            src={"http://via.placeholder.com/640x360"}
            width={640}
            height={360}
          />
          <div className="space-y-2">
            <h2 className="text-md font-semibold">Lorem Ipsum</h2>
            <p className="text-sm">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Organized by : Mafatikhul Ilmi
            </p>
            <p className="text-sm text-gray-600">
              Show Time : Sunday, 4 Feb 2024
            </p>
          </div>
        </div>
        <div className="card space-y-4">
          <Image
            alt="event image"
            src={"http://via.placeholder.com/640x360"}
            width={640}
            height={360}
          />
          <div className="space-y-2">
            <h2 className="text-md font-semibold">Lorem Ipsum</h2>
            <p className="text-sm">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Organized by : Mafatikhul Ilmi
            </p>
            <p className="text-sm text-gray-600">
              Show Time : Sunday, 4 Feb 2024
            </p>
          </div>
        </div>
        <div className="card space-y-4">
          <Image
            alt="event image"
            src={"http://via.placeholder.com/640x360"}
            width={640}
            height={360}
          />
          <div className="space-y-2">
            <h2 className="text-md font-semibold">Lorem Ipsum</h2>
            <p className="text-sm">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Organized by : Mafatikhul Ilmi
            </p>
            <p className="text-sm text-gray-600">
              Show Time : Sunday, 4 Feb 2024
            </p>
          </div>
        </div>
        <div className="card space-y-4">
          <Image
            alt="event image"
            src={"http://via.placeholder.com/640x360"}
            width={640}
            height={360}
          />
          <div className="space-y-2">
            <h2 className="text-md font-semibold">Lorem Ipsum</h2>
            <p className="text-sm">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Organized by : Mafatikhul Ilmi
            </p>
            <p className="text-sm text-gray-600">
              Show Time : Sunday, 4 Feb 2024
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
