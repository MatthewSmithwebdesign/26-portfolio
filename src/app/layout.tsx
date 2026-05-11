import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import Navigation from "@/components/Navigation/Navigation";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Matthew Smith",
      url: "https://matthewsmithwebdesign.com",
      jobTitle: "Full-Stack Developer",
      sameAs: [
        "https://github.com/MatthewSmithwebdesign",
        "https://linkedin.com/in/matthewsmithwebdesign/",
      ],
    },
    {
      "@type": "WebSite",
      name: "Matthew Smith | Full-Stack Developer",
      url: "https://matthewsmithwebdesign.com",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://matthewsmithwebdesign.com"),
  title: {
    default: "Matthew Smith | Full-Stack Developer",
    template: "%s | Matthew Smith",
  },
  description:
    "Full-Stack Developer building modern web solutions with React, Next.js, Drupal, and AI integration.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Matthew Smith",
    title: "Matthew Smith | Full-Stack Developer",
    description:
      "Full-Stack Developer building modern web solutions with React, Next.js, Drupal, and AI integration.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Smith | Full-Stack Developer",
    description:
      "Full-Stack Developer building modern web solutions with React, Next.js, Drupal, and AI integration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${GeistSans.className} ${jetbrainsMono.variable} antialiased bg-bg text-fg`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
