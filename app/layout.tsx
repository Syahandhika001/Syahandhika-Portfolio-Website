import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://syahandhika-naufal-farizi.vercel.app/'),
  title: 'Syahandhika | Frontend Developer & OutSystems Specialist',
  description:
    'Passionate Frontend Developer specializing in React, Next.js, and OutSystems. Building beautiful and functional web experiences in Jakarta, Indonesia.',
  keywords: [
    'Frontend Developer',
    'OutSystems Developer',
    'React Developer',
    'Next.js Developer',
    'Web Development',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Jakarta',
    'Indonesia',
  ],
  authors: [{ name: 'Syahandhika Naufal Farizi' }],
  creator: 'Syahandhika',
  
  // ✅ ADD FAVICON CONFIGURATION
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  
  // ✅ IMPROVED OPEN GRAPH
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://syahandhika-naufal-farizi.vercel.app/',
    title: 'Syahandhika | Frontend Developer',
    description:
      'Passionate Frontend Developer specializing in React, Next.js, and OutSystems',
    siteName: 'Syahandhika Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Syahandhika Portfolio',
      },
    ],
  },
  
  // ✅ TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    title: 'Syahandhika | Frontend Developer',
    description:
      'Passionate Frontend Developer specializing in React, Next.js, and OutSystems',
    creator: '@syahandhika',
    images: ['/og-image.png'],
  },
  
  // ✅ SEO ROBOTS
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}