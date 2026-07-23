export interface ContactPayload {
  name: string;
  email: string;
  interested: string;
  website?: string;
  message: string;
  honeypot?: string;
  formStart?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeWebsite(rawWebsite: string): string {
  if (!rawWebsite.trim()) {
    return "";
  }

  const maybeWithProtocol = rawWebsite.startsWith("http://") || rawWebsite.startsWith("https://")
    ? rawWebsite
    : `https://${rawWebsite}`;

  return new URL(maybeWithProtocol).toString();
}

export function validateContactPayload(payload: ContactPayload): { valid: true } | { valid: false; message: string } {
  if (payload.honeypot) {
    return { valid: false, message: "Bot detection triggered." };
  }

  const formStart = Number.parseInt(payload.formStart || "0", 10);
  if (!Number.isFinite(formStart) || Date.now() - formStart < 3000) {
    return { valid: false, message: "Please take a moment to complete the form." };
  }

  if (!payload.name?.trim()) {
    return { valid: false, message: "Name is required." };
  }

  if (!payload.email?.trim() || !EMAIL_REGEX.test(payload.email.trim())) {
    return { valid: false, message: "Please enter a valid email address." };
  }

  if (!payload.interested?.trim()) {
    return { valid: false, message: "Please select a service." };
  }

  if (!payload.message?.trim()) {
    return { valid: false, message: "Please add a short message about your project." };
  }

  if (payload.website?.trim()) {
    try {
      normalizeWebsite(payload.website.trim());
    } catch {
      return { valid: false, message: "Please enter a valid website URL." };
    }
  }

  return { valid: true };
}

export function toEmailText(payload: ContactPayload): string {
  return [
    "New Contact Form Submission",
    "===========================",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Service Interested: ${payload.interested}`,
    payload.website?.trim() ? `Website: ${payload.website}` : "Website: Not provided",
    "",
    "Message:",
    payload.message,
    "",
    "---",
    "Sent from davidvidovic.com contact form",
  ].join("\n");
}
