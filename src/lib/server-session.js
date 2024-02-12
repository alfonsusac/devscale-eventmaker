import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export function session() {
  const token = cookies().get("token")?.value;
  const userData = jwtDecode(token);
  return { token, userData };
}
