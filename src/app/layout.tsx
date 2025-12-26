
import { Metadata } from "next";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
     
      >
        {children}
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: {
    default: "BioDental - Dentisterie Naturelle à Annaba",
    template: "%s | BioDental"
  },
  description:
    "BioDental est un cabinet dentaire à Annaba spécialisé en dentisterie naturelle, soins doux, implants et orthodontie. Prenez rendez-vous dès aujourd’hui.",
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    siteName: "BioDental",
  }
}

