import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import NavigationBar from "@/components/navigationBar";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manabu",
  description: "Manabu is a platform for learning Japanese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavigationBar
          links={[
            { name: "Hiragana" },
            { name: "Katakana" },
            { name: "Kanji" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
