const API = "http://127.0.0.1:8000";

export async function getSensorData() {
  const res = await fetch(`${API}/sensor/latest`);
  return res.json();
}

export async function getEvents() {
  const res = await fetch(`${API}/events`);
  return res.json();
}

export async function startPump() {
  const res = await fetch(`${API}/pump/start`, {
    method: "POST",
  });

  return res.json();
}

export async function stopPump() {
  const res = await fetch(`${API}/pump/stop`, {
    method: "POST",
  });

  return res.json();
}