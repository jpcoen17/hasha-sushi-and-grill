import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HASHA Sushi & Grill | First AYCE Sushi, Sashimi & Grill in Yogyakarta",
  description: "Hasha Sushi & Grill — First All You Can Eat Sushi, Sashimi and Grill in Yogyakarta. Fresh sushi, premium sashimi, and authentic Japanese grill in a luxurious dining atmosphere.",
  keywords: "sushi yogyakarta, ayce sushi, hasha sushi grill, japanese restaurant yogyakarta, sashimi yogyakarta",
  openGraph: {
    title: "HASHA Sushi & Grill",
    description: "First All You Can Eat Sushi, Sashimi and Grill in Yogyakarta",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
