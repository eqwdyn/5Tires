export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, tel } = body;
    console.log("Feedback received:", { name, tel });
    return Response.json({ ok: true, received: { name, tel } });
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
}
