# EmailJS Setup Guide for Odernix Contact Form

This guide will help you set up EmailJS to handle contact form submissions and send them directly to your email.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

### Template Configuration:
- **Template Name**: `Odernix Contact Form Submission`
- **Subject**: `New Contact Form Submission from {{from_name}}`

### Email Template Content:
```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Service Category:</strong> {{service_category}}</p>
<p><strong>Submission Date:</strong> {{submission_date}}</p>

<h3>Project Details:</h3>
<p>{{message}}</p>

<hr>
<p><em>This email was sent from the Odernix website contact form.</em></p>
<p><em>Reply to: {{reply_to}}</em></p>
```

4. **Copy the Template ID** - you'll need this later
5. Click **Save**

## Step 4: Get Public Key

1. Go to **Account** settings
2. Find **Public Key** section
3. **Copy the Public Key** - you'll need this later

## Step 5: Configure Environment Variables

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials
4. **Important**: Add `.env` to your `.gitignore` file to keep credentials secure

## Step 6: Test the Setup

1. Start your development server: `npm start`
2. Go to the Contact page
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox for the submission

## Email Template Variables

The following variables are available in your email template:

- `{{from_name}}` - Contact's full name
- `{{from_email}}` - Contact's email address
- `{{phone}}` - Contact's phone number (or "Not provided")
- `{{service_category}}` - Selected service category
- `{{message}}` - Project details message
- `{{to_email}}` - Where the email is sent (info@odernix.com)
- `{{reply_to}}` - Contact's email for easy replies
- `{{submission_date}}` - When the form was submitted

## Troubleshooting

### Common Issues:

1. **"User ID is required"**
   - Make sure you've set the Public Key correctly
   - Ensure environment variables are loaded properly

2. **"Template not found"**
   - Double-check the Template ID
   - Make sure the template is saved and published

3. **"Service not found"**
   - Verify the Service ID
   - Ensure the email service is properly configured

4. **Emails not arriving**
   - Check spam folder
   - Verify email service configuration
   - Test with a different email address

### Testing Tips:

- Use browser developer tools to check for console errors
- Test with different email addresses
- Start with a simple template and add complexity gradually

## Production Deployment

For production deployment (Netlify, Vercel, etc.):

1. Add environment variables to your hosting platform's settings
2. Make sure the domain is added to EmailJS allowed origins
3. Test thoroughly before going live

## Security Notes

- Never commit your `.env` file to version control
- Environment variables starting with `REACT_APP_` are public in the browser
- EmailJS credentials are safe to expose in frontend (they're designed for it)
- Set up domain restrictions in EmailJS dashboard for additional security

## Support

If you need help:
- EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Contact EmailJS support for service-specific issues
- Check browser console for detailed error messages