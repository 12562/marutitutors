# Maruti Tutors - Setup Guide

## 1. Custom Domain Setup

### Step 1: Add Custom Domain to Firebase
```bash
firebase hosting:sites:create yourdomain.com
```

### Step 2: Configure Domain in Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `gen-lang-client-0357097566`
3. Go to Hosting → Custom domains
4. Click "Add custom domain"
5. Enter your domain (e.g., `marutitutors.com`)
6. Follow the DNS configuration instructions

### Step 3: Update DNS Records
Add these records to your domain registrar:

**For apex domain (marutitutors.com):**
- Type: A
- Name: @
- Value: [Firebase IP addresses - get from Firebase console]

**For www subdomain (www.marutitutors.com):**
- Type: CNAME
- Name: www
- Value: [Firebase hosting target - get from Firebase console]

### Step 4: Verify Domain
Firebase will verify your domain ownership and SSL certificate will be automatically provisioned.

## 2. Contact Form Email Notifications

### Step 1: Set Environment Variables
Create a `.env` file in the `functions` directory:

```bash
# functions/.env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
ADMIN_EMAIL=admin@yourdomain.com
```

### Step 2: Generate Gmail App Password
1. Go to Google Account settings
2. Enable 2-factor authentication
3. Go to Security → App passwords
4. Generate password for "Mail"
5. Use this password in EMAIL_PASS

### Step 3: Deploy Functions
```bash
firebase deploy --only functions
```

### Step 4: Test Contact Form
1. Visit your website's contact page
2. Submit a test inquiry
3. Check your admin email for notifications

## 3. Alternative: Use Firebase Extensions

If functions deployment is problematic, you can use Firebase Extensions:

```bash
firebase ext:install firebase/firestore-send-email --project=gen-lang-client-0357097566
```

Then configure the extension to trigger on new documents in the `inquiries` collection.

## 4. Environment Variables Setup

For production, set environment variables in Firebase:

```bash
firebase functions:config:set email.user="your-email@gmail.com"
firebase functions:config:set email.pass="your-app-password"
firebase functions:config:set email.admin="admin@yourdomain.com"
```

## 5. Testing

After setup:
1. Test contact form submission
2. Verify email notifications are received
3. Check Firebase console for function logs
4. Test custom domain loads correctly

## 6. Troubleshooting

### Functions not deploying:
- Check Firebase project permissions
- Ensure billing is enabled for your project
- Try deploying with `--debug` flag

### Emails not sending:
- Verify Gmail app password is correct
- Check spam folder
- Ensure less secure app access is enabled (if using Gmail)

### Domain not working:
- Wait 24-48 hours for DNS propagation
- Check DNS records are correctly set
- Verify domain ownership in Firebase console