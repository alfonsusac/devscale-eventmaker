"use client";

import Cookies from "js-cookie";
import { requestLogin } from "@/lib/fetchAPI";

export async function login(email, password) {
  const { data, status } = await requestLogin(email, password);
  localStorage.setItem("user", JSON.stringify(data.payload));
  Cookies.set("token", data.token);
  return { status, message: data.message };
}

export function logout() {
  localStorage.removeItem("user");
  Cookies.remove("token");
}

export function session() {
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  const token = Cookies.get("token");
  return { user, token };
}
