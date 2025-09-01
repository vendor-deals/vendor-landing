import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";

const fontSans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const fontHeading = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.name,
  // icons: {
  //   icon: "/images/lou1s.png",
  //   shortcut: "/images/lou1s.png",
  // },
  // openGraph: {
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   url: siteConfig.origin,
  //   siteName: siteConfig.name,
  //   images: [
  //     {
  //       url: siteConfig.og,
  //       width: 2880,
  //       height: 1800,
  //       alt: siteConfig.name,
  //     },
  //   ],
  //   type: "website",
  //   locale: "en_US",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   site: siteConfig.socials.x.href,
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   images: {
  //     url: siteConfig.og,
  //     width: 2880,
  //     height: 1800,
  //     alt: siteConfig.name,
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable,
          "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
