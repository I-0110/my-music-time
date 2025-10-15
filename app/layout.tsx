import type { Metadata } from "next";
import { teachers } from './ui/fonts';

export const metadata: Metadata = {
  title: "Music Time!",
  description: "Your Music Tools Videos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${teachers.className} antialiased`}>{children}</body>
    </html>
  );
}
