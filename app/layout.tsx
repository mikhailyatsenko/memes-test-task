import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from './components/widgets/Navigation';
import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { cookies } from 'next/headers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Memes App',
  description: 'A place to find the best memes',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme');
  const serverThemeCookie = themeCookie?.value as 'dark' | 'light' | undefined;

  return (
    <html
      lang="en"
      className={`h-full ${serverThemeCookie === 'dark' ? serverThemeCookie : ''}`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <HeroUIProvider>
          <ToastProvider />
          <div className="h-screen relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full">
              <Navigation serverThemeCookie={serverThemeCookie} />
            </div>
            <main className="h-full w-full overflow-y-auto pt-[65px]">
              {children}
            </main>
          </div>
        </HeroUIProvider>
      </body>
    </html>
  );
}
