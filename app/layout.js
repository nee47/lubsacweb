import "./globals.css";
import { Source_Code_Pro, Montserrat } from "next/font/google";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Welcome from "./Components/Welcome";
import Script from "next/script";

const sourceSans = Source_Code_Pro({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const playfair = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title: "Lubricantes Industriales y Grasas para Metalmecánica en Perú | LUBSAC",
  description:
    "Lubricantes Especiales del Perú S.A.C. Venta de aceites y grasas industriales de alta calidad para minería, transporte y el sector metalmecánica en todo el Perú.",
  keywords: "lubricantes industriales, grasas, aceites, metalmecánica, minería, Perú, lubricantes especiales",
  openGraph: {
    title: "Lubricantes Especiales del Perú S.A.C.",
    description: "Venta de lubricantes y grasas para la industria metalmecánica y pesada en Perú.",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
            `,
          }}
        />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.GOOGLE_TAG_MANAGER_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${sourceSans.variable} ${playfair.variable} font-display`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
