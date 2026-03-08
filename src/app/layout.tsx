import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matthew Smith | Full-Stack Developer",
  description: "Freelance Full-Stack Developer & Full-Stack Drupal Developer. Python, PHP, JavaScript, React, Vue.js, Drupal, Shopify, WordPress, AI Integration.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono antialiased bg-black text-gray-300`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
