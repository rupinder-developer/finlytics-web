import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Finlytics — Plan Your Money Before You Spend It',
  description:
    'Plan your money before you spend it. Offline-first financial planning with complete privacy. No accounts, no tracking, no data collection.',
  keywords: [
    'financial planning',
    'budget planner',
    'savings',
    'investments',
    'offline',
    'privacy',
    'money management',
  ],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Finlytics — Plan Your Money Before You Spend It',
    description:
      'Offline-first financial planning with complete privacy. No accounts, no tracking, no data collection.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
