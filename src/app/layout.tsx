import type { Metadata } from "next";
import { Marcellus, DM_Sans, Imperial_Script } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/chatbot/chatbot";

const marcellus = Marcellus({
  weight: "400",
  variable: "--font-marcellus",
});

const dmsans = DM_Sans();

const imperial_script = Imperial_Script({
  weight: "400",
  variable: "--font-imperial_script",
});

export const metadata: Metadata = {
  title: "Roop & Roots By Renu",
  description: "Explore natural Ayurvedic skincare by Roop & Roots by Renu—pure herbal face packs, gentle formulas, and clean beauty for glowing, healthy skin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.variable} ${imperial_script.variable} ${dmsans.className} antialiased`}
      >
        {children}
        <Chatbot/>
      </body>
    </html>
  );
}
