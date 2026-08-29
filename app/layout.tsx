import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import PwaCleanup from './pwa-cleanup';
import { siteUrl, socialImage } from './site-config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Reanima+ Vida',
  title: {
    default: 'Formación en emergencias para empresas | Proyecto Reanima+ Vida',
    template: '%s | Proyecto Reanima+ Vida',
  },
  description:
    'Curso oficial ERC de Soporte Vital Básico y DEA, con un módulo empresarial independiente de Primeros Auxilios.',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    locale: 'es_ES',
    siteName: 'Proyecto Reanima+ Vida',
    title: 'Proyecto Reanima+ Vida | Formación en emergencias para empresas',
    description:
      'Curso oficial ERC de SVB y DEA, con práctica realista y un módulo empresarial de Primeros Auxilios.',
    images: [
      {
        url: socialImage,
        width: 1731,
        height: 908,
        alt: 'Formación práctica en reanimación y uso del DEA para empresas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyecto Reanima+ Vida | Formación en emergencias para empresas',
    description:
      'Curso oficial ERC de SVB y DEA, con práctica realista y un módulo empresarial de Primeros Auxilios.',
    images: [socialImage],
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
        <PwaCleanup />
        {children}
      </body>
    </html>
  );
}
