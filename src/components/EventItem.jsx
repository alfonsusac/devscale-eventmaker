import { EventItemAuthor } from "./EventItemAuthor";
import Link from "next/link";
import Image from "next/image";

export const EventItem = async ({ events }) => {
  return (
    <div className="h-16 flex gap-3 items-center">

      <div className="w-24 bg-cover bg-center rounded-md overflow-hidden">
        <Image
          src={events.image}
          alt="event image"
          width={500}
          height={500}
          unoptimized={true}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col grow flex-1 min-w-0">
        <h2 className="font-semibold min-w-0 truncate">
          {events.title}
        </h2>
        <p className="font-semibold text-sm text-[#646464] truncate">
          {events.dateTime}
        </p>
      </div>

      <div className="flex gap-2">
        <Link href={`/${events.id}`}>
          <button className="button btn-success w-full p-2" title="Detail Event">
            <PhEye className="text-xl" />
          </button>
        </Link>
        <Link href={`/dashboard/edit/${events.id}`}>
          <button className="button w-full p-2">
            <PhPencilSimpleFill className="text-xl" />
          </button>
        </Link>
        <Link href={`/dashboard/delete/${events.id}`}>
          <button className="button btn-primary w-full p-2">
            <PhTrashFill className="text-xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};



export function PhEye(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></path></svg>
  )
}


export function PhPencilSimpleFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="m227.31 73.37l-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63M192 108.68L147.31 64l24-24L216 84.68Z"></path></svg>
  )
}


export function PhTrashFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M112 168a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm0-120H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z"></path></svg>
  )
}