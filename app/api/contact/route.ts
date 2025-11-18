import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 5000 characters." },
        { status: 400 }
      );
    }

    // Check for required environment variables
    const {
      EMAIL_HOST,
      EMAIL_PORT,
      EMAIL_USER,
      EMAIL_PASSWORD,
      EMAIL_FROM,
      EMAIL_TO,
    } = process.env;

    if (
      !EMAIL_HOST ||
      !EMAIL_PORT ||
      !EMAIL_USER ||
      !EMAIL_PASSWORD ||
      !EMAIL_FROM ||
      !EMAIL_TO
    ) {
      console.error("Missing email configuration in environment variables");
      return NextResponse.json(
        { error: "Email service is not configured properly." },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: parseInt(EMAIL_PORT),
      secure: parseInt(EMAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: `"${name}" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                        New Contact Form Submission
                      </h1>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="margin: 0 0 20px; color: #666666; font-size: 16px; line-height: 1.5;">
                        You have received a new message from your website contact form:
                      </p>
                      
                      <!-- Name -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #10b981; border-radius: 4px;">
                            <p style="margin: 0 0 5px; color: #10b981; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
                              Name
                            </p>
                            <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600;">
                              ${name}
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Email -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #10b981; border-radius: 4px;">
                            <p style="margin: 0 0 5px; color: #10b981; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
                              Email
                            </p>
                            <p style="margin: 0; color: #1f2937; font-size: 16px;">
                              <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">
                                ${email}
                              </a>
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Phone (if provided) -->
                      ${
                        phone
                          ? `
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #10b981; border-radius: 4px;">
                            <p style="margin: 0 0 5px; color: #10b981; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
                              Phone
                            </p>
                            <p style="margin: 0; color: #1f2937; font-size: 16px;">
                              <a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">
                                ${phone}
                              </a>
                            </p>
                          </td>
                        </tr>
                      </table>
                      `
                          : ""
                      }
                      
                      <!-- Message -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #10b981; border-radius: 4px;">
                            <p style="margin: 0 0 10px; color: #10b981; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
                              Message
                            </p>
                            <p style="margin: 0; color: #1f2937; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
                              ${message}
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Reply Button -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 30px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background-color: #10b981; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                              Reply to ${name}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 30px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center; line-height: 1.5;">
                        This email was sent from the contact form on socialadforge.com
                        <br>
                        Received on ${new Date().toLocaleString("en-US", {
                          dateStyle: "full",
                          timeStyle: "short",
                        })}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}

Message:
${message}

---
Received on ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

