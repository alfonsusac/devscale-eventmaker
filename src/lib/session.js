"use client";

import Cookies from "js-cookie";
import { requestLogin } from "@/lib/fetchAPI";

export async function login(email, password) {
  const { payload, token } = await requestLogin(email, password);
  localStorage.setItem("user", JSON.stringify(payload));
  Cookies.set("token", token);
}

export function logout() {
  localStorage.removeItem("user");
  Cookies.remove("token");
}
