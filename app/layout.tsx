import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Formación en emergencias para empresas | Proyecto Reanima+ Vida',
  description:
    'Curso oficial ERC de Soporte Vital Básico y DEA, con un módulo empresarial independiente de Primeros Auxilios.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
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
        {children}
      </body>
    </html>
  );
}
