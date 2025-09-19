// app/actions/sendLead.ts
"use server";

export async function sendLead(formData: FormData) {
  try {
    const name = formData.get("name")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const service = formData.get("service")?.toString() || "";

    if (!name || !phone || !email) {
      return { ok: false, error: "Missing required fields" };
    }

    const res = await fetch(process.env.ZAPIER_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email,
        service,
        source: "website",
      }),
    });

    if (!res.ok) throw new Error("Zapier error");

    return { ok: true };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }
}
