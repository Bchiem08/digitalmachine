const sgMail = require("@sendgrid/mail");



sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

export default async function sendContactMessage(message) {
  const msg = {
    to: "huyearly@gmail.com",
    from: "digitalmachineltd@gmail.com",
    subject: "Sending Email",
    text: message,
    html: "<strong>" + message + "</strong>",
  };
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
}
