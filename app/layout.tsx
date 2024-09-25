import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});
// Fontes personalizadas

// Metadados atualizados para a Landing Page da ABJUR
export const metadata: Metadata = {
  title: "Abjur - Associação Brasileira Dos Jurados ",
  description: "Abjur - Associação Brasileira Dos Jurados ",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br"> {/* Define a língua como pt-br */}
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
        className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}
