import asyncHandler from "../utils/asyncHandler.js";
import Contact from "../models/contact.model.js";
import { transporter } from "../emailConfig.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export const sendMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    throw new ApiError(400, "All fields are required");
  }

  // Save to DB
  const newMessage = await Contact.create({
    name,
    email,
    message,
  });

  console.log("Sending mail...");

  // Send email notification
  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  });

  console.log("Email sent:", info.messageId);

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        newMessage,
        "Message Sent Successfully"
      )
    );
});