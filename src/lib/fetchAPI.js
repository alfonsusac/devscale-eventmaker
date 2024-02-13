export async function requestLogin(email, password) {
  const res = await fetch("https://eventmakers-api.fly.dev/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await res.json();
  return data;
}

export async function requestRegister(name, email, password) {
  const res = await fetch("https://eventmakers-api.fly.dev/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

  const data = await res.json();
  return data;
}
export async function requestEventList() {
  const res = await fetch("https://eventmakers-api.fly.dev/events");
  const data = await res.json();
  return data;
}

export async function requestEvent(eventid) {
  const res = await fetch(`https://eventmakers-api.fly.dev/events/${eventid}`, {
    method: "GET",
  });

  const { data } = await res.json();
  return data;
}

export async function requestUser(userid) {
  const token = process.env["ADMIN_TOKEN"];
  const res = await fetch(`https://eventmakers-api.fly.dev/users/${userid}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { data } = await res.json();
  return data;
}

export async function requestDeleteEvent(token, eventID) {
  await fetch(`https://eventmakers-api.fly.dev/events/${eventID}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function requestCreateEvent(
  token,
  author,
  title,
  description,
  image,
  dateTime
) {
  const res = await fetch("https://eventmakers-api.fly.dev/events/", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      description,
      image,
      dateTime,
      author,
    }),
  });
  const data = await res.json();
  return data;
}
