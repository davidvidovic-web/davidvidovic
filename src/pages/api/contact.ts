import type { APIRoute } from "astro";
import { toEmailText, validateContactPayload, type ContactPayload } from "../../lib/contact-validation";

const API_KEY =
  import.meta.env.NEXT_PRIVATE_MAILGUN_API_KEY ||
  import.meta.env.MAILGUN_API_KEY ||
  "";
const DOMAIN = import.meta.env.NEXT_PRIVATE_MAILGUN_DOMAIN || import.meta.env.MAILGUN_DOMAIN || "";
const REGION = (import.meta.env.NEXT_PRIVATE_MAILGUN_REGION || import.meta.env.MAILGUN_REGION || "us").toLowerCase();
const TARGET_EMAIL = import.meta.env.CONTACT_TO_EMAIL || "mail@davidvidovic.com";

function mailgunEndpoint(domain: string, region: string): string {
  const host = region === "eu" ? "https://api.eu.mailgun.net" : "https://api.mailgun.net";
  return `${host}/v3/${domain}/messages`;
}

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

    if (!API_KEY || !DOMAIN) {
      return new Response(
        JSON.stringify({ error: "Mail delivery is not configured on the server." }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    const formBody = new URLSearchParams();
    formBody.set("from", `Portfolio Contact <mailgun@${DOMAIN}>`);
    formBody.set("to", TARGET_EMAIL);
    formBody.set("subject", `New Contact: ${payload.name} - ${payload.interested}`);
    formBody.set("text", toEmailText(payload));
    formBody.set("h:Reply-To", payload.email);

    const authHeader = `Basic ${Buffer.from(`api:${API_KEY}`).toString("base64")}`;
    const response = await fetch(mailgunEndpoint(DOMAIN, REGION), {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
    });

    if (!response.ok) {
      const mailgunError = await response.text();
      return new Response(
        JSON.stringify({ error: "Failed to send email.", detail: mailgunError }),
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
