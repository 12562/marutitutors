# Maruti Tutors - Professional Tutoring Platform

A modern, SEO-friendly tutoring website built with Next.js, TypeScript, and Firebase.

## 🚀 Deployment Options

### Option 1: Deploy to Vercel (Recommended for Next.js)

Vercel is the easiest way to deploy Next.js applications and provides the best performance.

#### Steps:

1. **Install Vercel CLI** (optional, can also use GitHub integration):
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   Follow the prompts to connect your GitHub account and deploy.

3. **Set Environment Variables** in Vercel dashboard:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`

4. **Redeploy** after setting environment variables.

**Live URL**: Vercel will provide a `.vercel.app` domain.

### Option 2: Deploy to Firebase Hosting

The project is pre-configured for Firebase Hosting with Firestore and Functions.

#### Prerequisites:
- Firebase CLI installed: `npm install -g firebase-tools`
- Firebase project created
- Environment variables configured

#### Steps:

1. **Login to Firebase**:
   ```bash
   firebase login
   ```

2. **Set Firebase project** (if not already set):
   ```bash
   firebase use marutitutors
   ```

3. **Configure Firebase Functions for Next.js SSR**:

   Since this Next.js app requires server-side rendering for the contact form, we need to set up Firebase Functions.

   Update `firebase.json`:
   ```json
   {
     "hosting": {
       "public": "out",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "function": "nextjsFunc"
         }
       ]
     },
     "functions": {
       "source": "functions",
       "runtime": "nodejs18"
     }
   }
   ```

4. **Build and Export**:
   ```bash
   npm run build
   npm run export
   ```

5. **Deploy**:
   ```bash
   firebase deploy
   ```

**Note**: Firebase deployment for Next.js with SSR is complex. Vercel is recommended for better Next.js support.

### Option 3: Manual Static Export (Limited Functionality)

If you want to deploy as static files only (contact form won't work):

1. **Update next.config.ts**:
   ```typescript
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
   };
   export default nextConfig;
   ```

2. **Build static files**:
   ```bash
   npm run build
   ```

3. **Update firebase.json**:
   ```json
   {
     "hosting": {
       "public": ".next/static",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy**:
   ```bash
   firebase deploy --only hosting
   ```

## 🔧 Environment Setup

### Firebase Configuration

1. **Create Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create new project: "maruti-tutors"

2. **Enable Services**:
   - Authentication
   - Firestore Database
   - Storage
   - Hosting
   - Functions

3. **Get Firebase Config**:
   - Go to Project Settings > General > Your apps
   - Add web app and copy the config object

4. **Update `.env.local`**:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

### Email Notifications Setup

For inquiry notifications, configure Gmail:

1. **Enable 2FA** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account > Security > 2-Step Verification > App passwords
   - Generate password for "Mail"

3. **Set Firebase Function Config**:
   ```bash
   firebase functions:config:set gmail.email="your-email@gmail.com" gmail.password="your-app-password"
   ```

## 📋 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── how-it-works/
│   ├── pricing/
│   ├── subjects/
│   ├── testimonials/
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Reusable components
├── lib/                    # Firebase config
└── types/                  # TypeScript definitions
```

## 🚀 Features

- ✅ Responsive design with Tailwind CSS
- ✅ SEO optimized with Next.js metadata
- ✅ Firebase integration (Auth, Firestore, Storage)
- ✅ Contact form with real-time submissions
- ✅ Multi-tutor scalable architecture
- ✅ Academic, professional design

## 📞 Support

For deployment issues or questions, check:
- [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [Vercel Next.js Docs](https://vercel.com/docs/frameworks/nextjs)
# marutitutors
