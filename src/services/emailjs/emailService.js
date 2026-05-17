const EMAILJS_SEND_URL =
  "https://api.emailjs.com/api/v1.0/email/send";

function getEnv(name) {
  return import.meta.env[name];
}

function requireEnv(name) {
  const value = getEnv(name);

  if (!value) {
    throw new Error(
      `[EmailJS] Missing environment variable: ${name}`
    );
  }

  return value;
}

/**
 * sendEmailToMyAccount()
 * Sends email using EmailJS REST API
 */
export async function sendEmailToMyAccount({ templateParams }) {

  const serviceId = requireEnv("VITE_SERVICE_ID");
  const templateId = requireEnv("VITE_TEMPLATE_ID");
  const publicKey = requireEnv("VITE_PUBLIC_KEY");

  if (!templateParams || typeof templateParams !== "object") {
    throw new Error(
      "[EmailJS] templateParams must be an object"
    );
  }

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    // EmailJS REST expects `user_id` (public key)
    user_id: publicKey,
    template_params: templateParams,
  };

  console.log("EMAILJS PAYLOAD => ", payload);

  const response = await fetch(EMAILJS_SEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {

    let details = "";

    try {

      const errorData = await response.json();

      console.log("EMAILJS ERROR => ", errorData);

      details =
        errorData?.message ||
        errorData?.error ||
        JSON.stringify(errorData);

    } catch (error) {

      console.log(error);

    }

    throw new Error(
      details || "[EmailJS] Failed to send message"
    );
  }

  return await response.text();
}