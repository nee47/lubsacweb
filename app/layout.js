import "./globals.css";
import { Source_Code_Pro, Montserrat } from "next/font/google";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Welcome from "./Components/Welcome";

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
  title: "Lubricantes especiales en Perú. Se hacen envios a todo el país.",
  description:
    "Empresa de lubricantes industriales con mas de 15 años de experiencia en el rubro. Venta de aceites y grasas industriales de alta calidad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${sourceSans.variable} ${playfair.variable} font-display`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
