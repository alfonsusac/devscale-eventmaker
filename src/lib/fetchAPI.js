async function requestLogin(email, password) {
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

export { requestLogin };
