import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import PwaRegister from './pwa-register';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  applicationName: 'Reanima+ Vida',
  title: 'Formación en emergencias para empresas | Proyecto Reanima+ Vida',
  description:
    'Curso oficial ERC de Soporte Vital Básico y DEA, con un módulo empresarial independiente de Primeros Auxilios.',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Reanima+ Vida',
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'Reanima+ Vida',
    'mobile-web-app-capable': 'yes',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/pwa-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Proyecto Reanima+ Vida',
    title: 'Formación en emergencias para empresas',
    description:
      'Curso oficial ERC de SVB y DEA, con práctica realista y un módulo empresarial de Primeros Auxilios.',
    images: [
      {
        url: '/og-reanima.png',
        width: 1731,
        height: 908,
        alt: 'Formación práctica en reanimación y uso del DEA para empresas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formación en emergencias para empresas',
    description:
      'Curso oficial ERC de SVB y DEA, con práctica realista y un módulo empresarial de Primeros Auxilios.',
    images: ['/og-reanima.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0b2633',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PwaRegister />
        {children}
      </body>
    </html>
  );
}
