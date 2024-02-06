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

export async function requestEventList() {
  const token = process.env["ADMIN_TOKEN"];
  const res = await fetch("https://eventmakers-api.fly.dev/events", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
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