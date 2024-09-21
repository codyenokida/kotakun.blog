const { Resend } = require("resend");

// Initialize Resend with your API key
const API_KEY = "re_C1QtaRXi_AKRcW1HTFTLayQcJtu9w4nyu";
const resend = new Resend(API_KEY);

// Email template
const emailTemplate = (name) => `
  <html>
    <body>
      <h1>Hello ${name},</h1>
      <p>This is a sample email template.</p>
      <p>You can customize this template as needed.</p>
      <p>Best regards,<br>Your Name</p>
    </body>
  </html>
`;

// List of email recipients
const emailList = [{ name: "Cody enokida", email: "codyenokida@gmail.com" }];

// Function to send emails
async function sendEmails() {
  for (const recipient of emailList) {
    try {
      const data = await resend.emails.send({
        from: "kotaenokida@gmail.com", // Replace with your verified domain
        to: recipient.email,
        subject: "Sample Email Subject",
        html: emailTemplate(recipient.name),
      });
      console.log(data);
      console.log(`Email sent to ${recipient.email}. ID: ${data.id}`);
    } catch (error) {
      console.error(`Error sending email to ${recipient.email}:`, error);
    }
  }
}

// Call the function to send emails
sendEmails();
