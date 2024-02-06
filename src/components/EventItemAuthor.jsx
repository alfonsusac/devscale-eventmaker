import { requestUser } from "@/lib/fetchAPI";

export const EventItemAuthor = async ({ userid }) => {
  let data;
  try {
    data = await requestUser(userid);
  } catch (error) {
    console.error("An error occurred while fetching the user:", error);
    return;
  }

  let index = 0;
  return <p>BY: {data ? data[index].name : "Error fetching user"}</p>;
};
