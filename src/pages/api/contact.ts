import type { APIRoute } from "astro";
import { toEmailText, validateContactPayload, type ContactPayload } from "../../lib/contact-validation";

const API_KEY =
  import.meta.env.RESEND ||
  import.meta.env.NEXT_PRIVATE_RESEND_API_KEY ||
  import.meta.env.RESEND_API_KEY ||
  "";
const TARGET_EMAIL = import.meta.env.CONTACT_TO_EMAIL || "mail@davidvidovic.com";
const FROM_EMAIL = import.meta.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ error: "Method not allowed." }), {
    status: 405,
    headers: {
      "Allow": "POST",
      "Content-Type": "application/json",
    },
  });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = (await request.json()) as ContactPayload;
    const validation = validateContactPayload(payload);

    if (!validation.valid) {
      const statusCode = validation.message === "Bot detection triggered." ? 200 : 400;
      const message = statusCode === 200 ? "Message sent successfully." : validation.message;

      return new Response(JSON.stringify({ message }), {
        status: statusCode,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!API_KEY) {
      return new Response(
        JSON.stringify({ error: "Mail delivery is not configured on the server." }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TARGET_EMAIL],
        subject: `New Contact: ${payload.name} - ${payload.interested}`,
        text: toEmailText(payload),
        reply_to: payload.email,
      }),
    });

    if (!response.ok) {
      const resendError = await response.text();
      return new Response(
        JSON.stringify({ error: "Failed to send email.", detail: resendError }),
        { status: 502, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ message: "Email sent successfully." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return new Response(JSON.stringify({ error: "Failed to send message." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
