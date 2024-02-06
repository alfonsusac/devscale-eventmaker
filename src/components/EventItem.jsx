import { requestUser } from "@/lib/fetchAPI";

export const EventItem = async ({ events }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRzX0djR2RtMERWcEJaUUJOOSIsIm5hbWUiOiJSaXphIiwiZW1haWwiOiJtZUByaXphbWF1bGFuYS5jb20iLCJhdmF0YXIiOm51bGwsImlhdCI6MTcwNzE5MDIwMSwiZXhwIjoxNzE3NTU4MjAxfQ.riLvaqrnJ_VYig8_DxdcsB6zhiAF00VC8lYSSJiBP2Y";

  let data;
  try {
    data = await requestUser(token, events.author);
  } catch (error) {
    console.error("An error occurred while fetching the user:", error);
    return;
  }

  let index = 0;

  return (
    <div className="shadow-xl rounded-xl">
      <div className="bg-[url('/event-image.png')] h-32 bg-cover bg-center rounded-t-xl"></div>
      <div className="flex flex-col p-4">
        <div className=" flex flex-col gap-3">
          <p className="text-2xl bold text-black whitespace-nowrap overflow-hidden overflow-ellipsis">
            {events.title}
          </p>
          <p className="text-gray-500">{events.dateTime}</p>
        </div>
        <div className="divider"></div>
        <p>BY: {data ? data[index].name : "Error fetching user"}</p>
        <div className="divider"></div>
        <a href={`/${events.id}`}>
          <button className="btn btn-primary">Detail Event</button>
        </a>
      </div>
    </div>
  );
};
