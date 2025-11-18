# Contact Form Email Setup Guide

This guide will help you set up the contact form to send emails using Nodemailer.

## 📋 Prerequisites

- A Gmail account (or any other email provider)
- Access to generate app passwords (for Gmail)

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Nodemailer

Run this command in your project root:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### Step 2: Create Environment Variables File

Create a file named `.env.local` in your project root and add these variables:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=socialadforge@gmail.com
```

### Step 3: Configure Gmail (Most Common)

#### Enable 2-Step Verification:
1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left menu
3. Enable "2-Step Verification" if not already enabled

#### Generate App Password:
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" and your device type
3. Click "Generate"
4. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)
5. Paste this password into `EMAIL_PASSWORD` in your `.env.local` file (remove spaces)

#### Update .env.local:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=abcdabcdabcdabcd
EMAIL_FROM=your-gmail@gmail.com
EMAIL_TO=socialadforge@gmail.com
```

### Step 4: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact form on your website

3. Fill in the form and click "Send Message"

4. Check the email address specified in `EMAIL_TO` for the message

---

## 🔧 Alternative Email Providers

### Outlook/Hotmail

```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=your-email@outlook.com
EMAIL_TO=socialadforge@gmail.com
```

### Yahoo Mail

```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@yahoo.com
EMAIL_TO=socialadforge@gmail.com
```

**Note:** Yahoo also requires an app password. Generate one at:
https://login.yahoo.com/account/security

### SendGrid (Recommended for Production)

```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
EMAIL_FROM=your-verified-sender@yourdomain.com
EMAIL_TO=socialadforge@gmail.com
```

**Setup:**
1. Sign up at https://sendgrid.com/
2. Verify a sender email address
3. Create an API key
4. Use "apikey" as the username and your API key as the password

### Mailgun

```env
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_USER=your-mailgun-smtp-username
EMAIL_PASSWORD=your-mailgun-smtp-password
EMAIL_FROM=your-email@your-domain.com
EMAIL_TO=socialadforge@gmail.com
```

---

## 🎨 Email Template Features

The contact form sends beautifully formatted HTML emails with:

- ✅ Professional gradient header
- ✅ Clear contact information display
- ✅ Responsive design that works on all email clients
- ✅ Direct "Reply" button
- ✅ Timestamp of submission
- ✅ Fallback plain text version

---

## 🔒 Security Best Practices

1. **Never commit `.env.local` to Git** - It's already in `.gitignore`
2. **Use app passwords** instead of your actual email password
3. **Limit access** to your environment variables
4. **For production**, consider using environment variables from your hosting platform
5. **Monitor email usage** to prevent abuse

---

## 🐛 Troubleshooting

### Error: "Missing email configuration"
- Make sure `.env.local` exists in your project root
- Check that all required environment variables are set
- Restart your development server after creating/updating `.env.local`

### Error: "Invalid login"
- For Gmail: Make sure you're using an App Password, not your regular password
- Verify that 2-Step Verification is enabled
- Double-check the username and password

### Error: "Connection timeout"
- Check your internet connection
- Try a different email provider
- Verify the EMAIL_HOST and EMAIL_PORT are correct

### Emails not arriving
- Check your spam/junk folder
- Verify EMAIL_TO is correct
- Check the console for error messages
- Try sending a test email from your email provider's web interface

### Rate limiting
- Gmail has a limit of ~500 emails per day
- For higher volumes, use SendGrid or Mailgun
- Implement rate limiting on your API route

---

## 🚀 Deploying to Production

### Vercel
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add all EMAIL_* variables from your `.env.local`
4. Redeploy your application

### Netlify
1. Go to Site settings > Environment variables
2. Add all EMAIL_* variables
3. Redeploy

### Other platforms
Most hosting platforms have similar environment variable management in their dashboard.

---

## 📝 API Route Details

The contact form API is located at: `/app/api/contact/route.ts`

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "message": "Your message here"
}
```

**Validation:**
- Name: 2-100 characters, required
- Email: Valid email format, required
- Phone: Optional
- Message: 10-5000 characters, required

**Response (Success):**
```json
{
  "message": "Email sent successfully!"
}
```

**Response (Error):**
```json
{
  "error": "Error message here",
  "details": "Detailed error information"
}
```

---

## 📧 Testing Email Sending

For testing without sending real emails, you can use:

### Ethereal Email (Free test accounts)
1. Go to https://ethereal.email/
2. Click "Create Ethereal Account"
3. Use the provided credentials in your `.env.local`:

```env
EMAIL_HOST=smtp.ethereal.email
EMAIL_PORT=587
EMAIL_USER=provided-username
EMAIL_PASSWORD=provided-password
EMAIL_FROM=provided-username
EMAIL_TO=socialadforge@gmail.com
```

All emails will be captured and viewable at https://ethereal.email/messages

---

## 💡 Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Check your server logs
3. Verify all environment variables are set correctly
4. Ensure your email provider allows SMTP access
5. Try with a different email provider (e.g., Ethereal for testing)

---

## ✅ Checklist

- [ ] Nodemailer installed
- [ ] `.env.local` created with all required variables
- [ ] Gmail App Password generated (if using Gmail)
- [ ] Development server restarted
- [ ] Test email sent successfully
- [ ] Production environment variables configured

---

**Last Updated:** November 2025  
**Created for:** SocialAdForge Contact Form

