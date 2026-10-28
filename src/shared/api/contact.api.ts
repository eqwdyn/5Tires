import { api } from "./api.instanse";

export async function submitContact(data: { name: string; tel: string }) {
  console.log("ACTION PAYLOAD:", data);

  try {
    const res = await api.post("/feedback", data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("ACTION RESPONSE:", res.data);
    return { ok: true, data: res.data };
  } catch (e: any) {
    console.error("ACTION ERROR:", e.message);
    return { ok: false, error: e.message || "Server error" };
  }
}
