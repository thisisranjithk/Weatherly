import "./globals.css";
import { Metadata } from "next";
import { METADATA } from "../constants";

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
  keywords: METADATA.keywords,
  authors: METADATA.authors,
  creator: METADATA.creator,
  publisher: METADATA.publisher,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
