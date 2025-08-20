import type { Metadata } from "next";
import { Bowlby_One, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const bowlbyOne = Bowlby_One({
  variable: "--font-bowlby-one",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hannah",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${bowlbyOne.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
