import type { Metadata } from "next";
import '@/app/globals.css'

export const metadata: Metadata = {
  title: "ScriptSpeed",
  description: "Speed typing practice for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900">{children}</body>
    </html>
  );
}

