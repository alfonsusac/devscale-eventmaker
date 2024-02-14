import Image from "next/image";

export const AllEventItem = async ({ events }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-lg">
      <div className="h-40 max-h-[500px] bg-cover bg-center rounded-t-xl">
        <Image
          src={events.image}
          alt="event image"
          width={500}
          height={500}
          unoptimized={true}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="divider"></div>
      <div className="flex flex-col justify-center space-y-3 p-3">
        <div className="space-y-2">
          <h2 className="h-12 text-md font-semibold">{events.title}</h2>
          <p className="text-sm text-gray-400 line-clamp-3">
            {events.description}
          </p>
        </div>
        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-600">
              Show Time : {events.dateTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
