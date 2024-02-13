import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export function session() {
  const token = cookies().get("token")?.value;
  if (token) {
    const userData = jwtDecode(token);
    return { token, userData };
  } else {
    return null;
  }
}
