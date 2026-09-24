import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = `${portfolio.personal.name} — ${portfolio.personal.title}`;
const description = portfolio.personal.summary;

export const metadata: Metadata = {
  metadataBase: new URL("https://abbas-al-turkmani.vercel.app"),
  title,
  description,
  keywords: [
    "Flutter",
    "Dart",
    "mobile developer",
    "software developer",
    "Abbas al Turkmani",
    "Damascus",
  ],
  authors: [{ name: portfolio.personal.name }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: portfolio.personal.name,
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [
      {
        url: "/كوفي1.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/كوفي.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
