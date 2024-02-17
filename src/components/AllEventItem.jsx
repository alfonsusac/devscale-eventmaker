import Image from "next/image";
import Link from "next/link";

export const AllEventItem = async ({ events }) => {
  return (
    <Link href={`/${events.id}`}>
      <article className="group">
        <div className="h-40 max-h-[500px] bg-cover bg-center rounded-xl overflow-hidden
        transition-all duration-100
        outline
        outline-0 outline-indigo-400/20 
        group-hover:outline-[0.6rem]
        ">
          <Image
            src={events.image}
            alt="event image"
            width={500}
            height={500}
            unoptimized={true}
            className="h-full w-full object-cover
            bg-zinc-100
            relative block
            after:absolute
            after:inset-0
            after:bg-zinc-200
            after:w-full
            after:h-full
            after:block
            after:bg-gradient-to-br
            after:from-pink-100
            after:to-red-200
            shadow-black/10 shadow-2xl
            "
          />
        </div>
        <header className="mt-4 text-xl font-semibold  tracking-tight leading-tight">
          {events.title}
        </header>
        <p className="font-medium mt-1 text-sm text-gray-600">
          {events.dateTime}
        </p>
        <p className="font-medium mt-2 text-sm line-clamp-2 text-black/60">
          {events.description}
        </p>
      </article>
    </Link>
  );
};
