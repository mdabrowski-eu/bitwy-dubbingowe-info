import type { Metadata } from "next";
import { Unbounded, Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Bitwy Dubbingowe",
  description:
    "Bitwy Dubbingowe to konkurs, w którym drużyny i pojedynczy uczestnicy ścierają się tworząc projekty dubbingowe. Piosenki, scenki, wokalistyka, aktorstwo, ilustracje, dialogi, tekściarstwo, realizacja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${unbounded.variable} ${manrope.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
