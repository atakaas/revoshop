import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RevoShop - Modern E-Commerce",
  description: "A modern e-commerce platform built with Next.js, TypeScript, and Tailwind CSS",
  keywords: ["e-commerce", "Next.js", "TypeScript", "Tailwind CSS", "React", "shopping"],
  authors: [{ name: "RevoShop Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "RevoShop - Modern E-Commerce",
    description: "A modern e-commerce platform with the best products",
    url: "https://revoshop.vercel.app",
    siteName: "RevoShop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RevoShop - Modern E-Commerce",
    description: "A modern e-commerce platform with the best products",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
