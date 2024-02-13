import { requestUser } from "@/lib/fetchAPI";
import { session } from "@/lib/server-session";

export const EventItemAuthor = async ({ userid }) => {
  const { token } = session();
  let data;
  try {
    data = await requestUser(token, userid);
  } catch (error) {
    console.error("An error occurred while fetching the user:", userid, error);
    return "Unknown User";
  }

  let index = 0;
  return data[index].name;
};
