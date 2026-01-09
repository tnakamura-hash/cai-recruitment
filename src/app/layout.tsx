import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";

const notoIcons = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "採用情報 | 株式会社CAI - 教育業界の常識を覆す",
  description: "株式会社CAI（武田塾）の採用サイトです。自ら学び、成長を追求する仲間を募集しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoIcons.variable} ${inter.variable} font-sans antialiased bg-white text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
