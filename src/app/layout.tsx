import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Althea Pilates Studio | Pilates en Ciudad Quesada, San Carlos",
  description: "Althea Pilates Studio en Ciudad Quesada. Pilates clásico y contemporáneo con Mat, Reformer y Wunda. Consulta horarios y reserva tu clase.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
    >
      <body className="font-body text-althea-deep-olive">{children}</body>
    </html>
  );
}
