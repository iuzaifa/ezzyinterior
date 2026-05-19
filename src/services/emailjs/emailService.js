const EMAILJS_SEND_URL =
  "https://api.emailjs.com/api/v1.0/email/send";

function requireEnv(name) {

  const value = import.meta.env[name];

  if (!value) {
    throw new Error(
      `Missing environment variable: ${name}`
    );
  }

  return value;
}

export async function sendEmailToMyAccount(templateParams) {

  const serviceId =
    requireEnv("VITE_SERVICE_ID");

  const templateId =
    requireEnv("VITE_TEMPLATE_ID");

  const publicKey =
    requireEnv("VITE_PUBLIC_KEY");

  const payload = {

    service_id: serviceId,

    template_id: templateId,

    user_id: publicKey,

    template_params: templateParams,
  };

  console.log("EMAILJS PAYLOAD => ", payload);

  const response = await fetch(
    EMAILJS_SEND_URL,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    }
  );

  const result = await response.text();

  console.log("EMAILJS RESPONSE => ", result);

  if (!response.ok) {
    throw new Error(result);
  }

  return result;
}
