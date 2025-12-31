
import { Metadata } from "next";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "BioDental",
              "url": "https://biodental-dr-fetnaci.com",
              "telephone": "+213787907832",
              "email": "biodental.dr.fetnaci@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8 mars, Plaine Ouest, cité 1172 lgts, bloc 60",
                "addressLocality": "Annaba",
                "addressCountry": "DZ"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://web.facebook.com/Biodental.Dr.Fetnaci.S/",
                "https://www.instagram.com/dr.fetnaci_sofiane",
                "https://www.tiktok.com/@biodental_dr.fetnaci"
              ]
            })
          }}
        />
      </head>
      <body>
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
    "BioDental est un cabinet dentaire à Annaba spécialisé en dentisterie naturelle, soins doux, implants et orthodontie. Prenez rendez-vous dès aujourd'hui.",
  icons: {
    icon: [
      { url: "/logo-tab.png", type: "image/png" }
    ],
    apple: [
      { url: "/logo-tab.png", type: "image/png" }
    ],
    shortcut: "/logo-tab.png"
  },
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    siteName: "BioDental",
  }
}

