import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import type { Viewport } from "next";
import {  Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	userScalable: true,
	themeColor: "black",
	interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
	metadataBase: new URL("https://amour-essenciel.com/"),
	title: "Soin énergétique - Massage | Courcelles | Amour EssenCiel",
	description:
		"A Courcelles, chez ‘Amour-EssenCiel’, un soin énergétique, un massage c'est faire l'expérience d'un moment de présence à soi, d'amour et de gratitude.",
		authors: {
			name: "Stéphane Gamot",
			url: "https://www.creation-site-internet.dev/stephane-gamot"
		},
	icons: {
		icon: "/favicon.ico",
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
		google: "_gh5hp1c4bujVleUyNp_uhMWwWsxmByYk2vS5apDbUE",
	},
	alternates: {
		canonical: "https://amour-essenciel.com/",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={openSans.className}><Header />{children}<Footer /></body>
    </html>
  );
}
