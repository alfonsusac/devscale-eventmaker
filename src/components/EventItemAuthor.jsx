import { requestUser } from "@/lib/fetchAPI";

export const EventItemAuthor = async ({ userid }) => {
  let data;
  try {
    data = await requestUser(userid);
  } catch (error) {
    console.error("An error occurred while fetching the user:", userid, error);
    return "Unknown User";
  }

  let index = 0;
  return data[index].name;
};
