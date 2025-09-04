import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zingle AI - Transform Your Customer Communication",
  description: "Revolutionize customer communication with Zingle AI's intelligent platform. Automate conversations, personalize interactions, and scale effortlessly with 98% satisfaction rates.",
  keywords: "AI customer service, automated communication, customer support AI, conversational AI, business automation, customer experience",
  authors: [{ name: "Zingle AI" }],
  creator: "Zingle AI",
  publisher: "Zingle AI",
  metadataBase: new URL("https://zingle.ai"),
  openGraph: {
    title: "Zingle AI - Transform Your Customer Communication",
    description: "Revolutionize customer communication with intelligent AI that delivers 98% satisfaction rates and 5x faster response times.",
    url: "https://zingle.ai",
    siteName: "Zingle AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zingle AI - Intelligent Customer Communication Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zingle AI - Transform Your Customer Communication",
    description: "Revolutionize customer communication with intelligent AI that delivers 98% satisfaction rates.",
    images: ["/twitter-image.jpg"],
    creator: "@zingleai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
