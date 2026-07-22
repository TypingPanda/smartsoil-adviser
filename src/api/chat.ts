const API_URL = "http://localhost:8000";

export async function askAI(message: string, context: any) {
  const res = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      context,
    }),
  });

  return await res.json();
}