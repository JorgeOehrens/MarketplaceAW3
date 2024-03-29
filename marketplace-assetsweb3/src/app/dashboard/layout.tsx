import type { Metadata } from "next";
import { Inter } from "next/font/google";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard ",
  description: "Martplace to Assets Digital ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
