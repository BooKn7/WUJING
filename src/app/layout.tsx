import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";
import IntroAnimation from "@/components/IntroAnimation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pixelify = Pixelify_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixelify",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Deep Space Minimalist",
  description: "Personal portfolio website with deep space minimalist design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${pixelify.variable} antialiased`}
      >
        <IntroAnimation />
        <div className="star-bg"></div>
        <NavBar />
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
