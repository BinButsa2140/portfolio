import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/Background";

export const metadata: Metadata = {
  title: "binsung's portfolio",
  description: "this is my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      {/* เพิ่ม font-sans เข้าไป */}
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
        />
      </head>
      <body className="font-sans min-h-full flex flex-col">
        <Background />
        {children}
      </body>
    </html>
  );
}
