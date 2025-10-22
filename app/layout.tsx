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
  metadataBase: new URL('https://syahandhika-portfolio-website.vercel.app/'),
  title: 'Syahandhika - Full-Stack Developer',
  description:
    'Portfolio website showcasing my projects and experience in web development',
  keywords: [
    'developer',
    'portfolio',
    'react',
    'next.js',
    'full-stack',
    'web development',
  ],
  authors: [{ name: 'Syahandhika' }],
  openGraph: {
    title: 'Syahandhika - Full-Stack Developer Portfolio',
    description: 'Explore my journey in web development and featured projects',
    images: ['/og-image.png'],
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