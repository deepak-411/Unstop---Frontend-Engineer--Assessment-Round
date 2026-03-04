import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Frontend Engineer - Assessment Round',
  description: 'User Management Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-body antialiased flex flex-col min-h-screen`}
      >
        <div className="flex-1">{children}</div>
        <Toaster />
        <footer className="text-center p-4 text-muted-foreground text-sm">
          © {new Date().getFullYear()} All Rights Reserved, Deepak Kumar
        </footer>
      </body>
    </html>
  );
}
