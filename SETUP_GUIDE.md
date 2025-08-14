# Techmate Website Setup Guide

## Overview
This guide will walk you through setting up the complete Techmate website with form submission system, including Notion database integration and EmailJS confirmations.

## Prerequisites
- Node.js (v18 or higher)
- A Notion account
- An EmailJS account
- An hCaptcha account (optional, for bot protection)
- Git (optional, for version control)

## 1. Initial Project Setup

### Install Dependencies
```bash
cd techmate
npm install
```

The project includes these key dependencies:
- Next.js 15 (React framework)
- TailwindCSS v4 (Styling)
- @notionhq/client (Notion integration)
- @emailjs/browser (Email notifications)
- @heroicons/react (Icons)
- @hcaptcha/react-hcaptcha (Bot protection)

## 2. Notion Database Setup

### Create Notion Integration
1. Go to [notion.so/my-integrations](https://notion.so/my-integrations)
2. Click "New Integration"
3. Give it a name (e.g., "Techmate Forms")
4. Select the workspace where you want to create databases
5. Copy the **Internal Integration Token** (starts with `secret_`)

### Create Community Interest Database
1. Create a new Notion page
2. Add a database with these properties:
   - **Name** (Title)
   - **Email** (Rich text)
   - **Phone Number** (Phone number)
   - **Interests** (Multi-select)
   - **Background** (Select)
   - **Goals** (Rich text)
   - **Created At** (Created time)

3. Share the database with your integration:
   - Click "Share" in the top right
   - Click "Invite"
   - Select your integration
   - Copy the database ID from the URL (between the last `/` and `?`)

### Create Partner Interest Database
1. Create another Notion page with a database
2. Add these properties:
   - **Organisation Name** (Title)
   - **Contact Name** (Rich text)
   - **Email** (Rich text)
   - **Phone Number** (Phone number)
   - **Organisation Type** (Select)
   - **Organisation Size** (Select)
   - **Partnership Interests** (Multi-select)
   - **Budget Range** (Select)
   - **Timeline** (Select)
   - **Goals** (Rich text)
   - **Created At** (Created time)

3. Share this database with your integration as well
4. Copy this database ID too

## 3. EmailJS Setup

### Create EmailJS Account
1. Go to [emailjs.com](https://emailjs.com)
2. Sign up for a free account
3. Note your **User ID** from the dashboard

### Create Email Service
1. Go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note the **Service ID**

### Create Email Templates

#### Community Join Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Template ID: `community_confirmation`
4. Subject: `Welcome to Techmate - Your Journey Begins Now!`
5. Content:
```html
Hi {{to_name}},

Welcome to the Techmate community! 🎉

Thank you for your interest in joining our mission to open doors to technology for everyone. We're excited to have you on board!

Here's what happens next:
- Our team will review your application
- You'll receive updates about upcoming workshops and events
- We'll match you with mentorship opportunities based on your interests

Your interests: {{interests}}
Your background: {{background}}

Stay connected:
- Website: https://techmate.org
- Follow us on social media for the latest updates

Welcome aboard!
The Techmate Team
```

#### Partner Confirmation Template
1. Create another template
2. Template ID: `partner_confirmation`
3. Subject: `Thank you for your partnership interest - Techmate`
4. Content:
```html
Hi {{contact_name}},

Thank you for your interest in partnering with Techmate!

We appreciate {{organization_name}}'s commitment to tech inclusion and diversity.

Partnership interests: {{partnership_interests}}
Organization type: {{organization_type}}

Our partnerships team will review your inquiry and get back to you within 2-3 business days to discuss how we can work together.

Best regards,
The Techmate Partnerships Team
```

## 4. hCaptcha Setup (Optional - Recommended for Production)

### Create hCaptcha Account
1. Go to [hcaptcha.com](https://hcaptcha.com)
2. Sign up for a free account
3. Create a new site from the dashboard

### Configure hCaptcha Site
1. Click "New Site" in your hCaptcha dashboard
2. Add your domain(s):
   - For development: `localhost`
   - For production: your actual domain (e.g., `techmate.org`)
3. Copy the **Site Key** (public key)
4. Copy the **Secret Key** (keep this private)

### hCaptcha Features
- **Free tier**: 1,000,000 requests per month
- **Privacy-focused**: More privacy-compliant than other captcha services
- **Accessibility**: Better accessibility features
- **Easy integration**: Simple React component

**Note:** hCaptcha is optional but highly recommended for production to prevent spam and bot submissions. If you don't configure hCaptcha, the forms will still work without captcha protection.

## 5. Environment Configuration

Create a `.env.local` file in your project root:

```env
# Notion Configuration
NOTION_API_KEY=your_notion_integration_token_here
NOTION_COMMUNITY_DATABASE_ID=your_community_database_id_here
NOTION_PARTNER_DATABASE_ID=your_partner_database_id_here

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
NEXT_PUBLIC_EMAILJS_USER_ID=your_emailjs_user_id_here
NEXT_PUBLIC_EMAILJS_COMMUNITY_TEMPLATE_ID=community_confirmation
NEXT_PUBLIC_EMAILJS_PARTNER_TEMPLATE_ID=partner_confirmation

# hCaptcha Configuration (Optional - leave blank to disable)
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_hcaptcha_site_key_here
HCAPTCHA_SECRET_KEY=your_hcaptcha_secret_key_here
```

**Important:** Never commit `.env.local` to version control. It's already in `.gitignore`.

## 6. Testing the Setup

### Start Development Server
```bash
npm run dev
```

### Test Form Submissions
1. Navigate to `http://localhost:3000`
2. Click "Join Our Community" or "Become a Partner"
3. Fill out and submit a test form
4. **Complete the hCaptcha** (if enabled)
5. Check:
   - Notion database for new entries
   - Your email for confirmation messages
   - Browser console for any errors

### hCaptcha Testing
- **Development**: hCaptcha works on localhost without additional configuration
- **If captcha doesn't appear**: Check that `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` is set
- **If submissions fail**: Verify `HCAPTCHA_SECRET_KEY` is correct
- **To disable temporarily**: Remove or comment out the hCaptcha environment variables

### Common Issues & Solutions

#### Notion Integration Issues
- **Error 401:** Check your integration token
- **Error 404:** Verify database IDs and sharing permissions
- **Missing properties:** Ensure database properties match the form fields

#### EmailJS Issues
- **Failed to send:** Verify service ID and user ID
- **Template not found:** Check template IDs match your .env values
- **CORS errors:** Make sure EmailJS is configured for your domain

#### hCaptcha Issues
- **Captcha not displaying:** Check `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` is set correctly
- **Invalid captcha errors:** Verify `HCAPTCHA_SECRET_KEY` matches your account
- **Domain errors:** Ensure your domain is registered in hCaptcha site settings
- **Network issues:** hCaptcha requires internet connection to verify tokens

#### Form Validation Issues
- Check browser console for JavaScript errors
- Verify all required fields are filled
- Ensure email format is valid
- Complete captcha verification if enabled

## 7. Deployment Preparation

### Environment Variables for Production
Set these in your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Other platforms: Follow their documentation

### Build and Test
```bash
npm run build
npm start
```

## 8. Ongoing Maintenance

### Regular Tasks
- Monitor Notion databases for new submissions
- Review EmailJS usage (free tier has limits)
- Monitor hCaptcha usage and analytics
- Update form options as needed
- Check for security updates

### Scaling Considerations
- EmailJS free tier: 200 emails/month
- Notion API: 1000 requests per workspace per day
- hCaptcha free tier: 1,000,000 requests/month
- Consider upgrading plans as your community grows

## 9. Customization Options

### Adding New Form Fields
1. Add field to the Notion database
2. Update the form component (`CommunityJoinForm.js` or `PartnerForm.js`)
3. Update the API route to handle the new field
4. Test thoroughly

### Styling Changes
- Colors are defined in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component-specific styles in each component file

### Adding New Pages
- Create new folder in `src/app/`
- Add `page.js` file
- Update navigation as needed

## 10. Support & Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Notion API Documentation](https://developers.notion.com/)
- [EmailJS Documentation](https://emailjs.com/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

### Community
- Next.js GitHub Discussions
- Notion Developer Community
- TailwindCSS Discord

---

## Quick Start Checklist

- [ ] Clone/download project
- [ ] Run `npm install`
- [ ] Set up Notion integration and databases
- [ ] Configure EmailJS service and templates
- [ ] Set up hCaptcha account and site (optional but recommended)
- [ ] Create `.env.local` with all credentials
- [ ] Test form submissions locally (including captcha)
- [ ] Deploy to production
- [ ] Set production environment variables
- [ ] Test production deployment

**Estimated Setup Time:** 35-50 minutes (including hCaptcha setup)

Good luck with your Techmate website! 🚀
