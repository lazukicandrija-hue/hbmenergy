import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BHM Energy | Elektroinstalacije i fina galanterija – Novi Sad, Srbija',
  description:
    'BHM Energy – profesionalne elektroinstalacije, fina elektrogalanterija, LED rasveta i razvodne table. Kvalitetna usluga na teritoriji cele Srbije.',
  keywords: [
    'elektroinstalacije',
    'fina galanterija',
    'LED rasveta',
    'razvodne table',
    'Novi Sad',
    'Beograd',
    'Srbija',
    'elektroinženjering',
    'BHM Energy',
  ],
  openGraph: {
    title: 'BHM Energy | Elektroinstalacije i fina galanterija',
    description:
      'Pretvaramo energiju u sigurnost. Fina elektrogalanterija i instalacije za vaš prostor.',
    type: 'website',
    locale: 'sr_RS',
  },
};

import FloatingContact from '@/components/ui/FloatingContact';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="dark">
      <body className="antialiased">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
