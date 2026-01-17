import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Maruti Tutors - Engineer-Led Personalized Tutoring',
  description: 'Professional tutoring in Mathematics, Science, and Engineering subjects. Personalized, concept-driven education by experienced engineers and educators.',
  keywords: 'tutoring, mathematics, science, engineering, personalized education, online tutoring',
  authors: [{ name: 'Mohit Sharma' }],
  openGraph: {
    title: 'Maruti Tutors - Engineer-Led Personalized Tutoring',
    description: 'Professional tutoring in Mathematics, Science, and Engineering subjects.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
