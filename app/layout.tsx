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
  icons: METADATA.icons,
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="w-screen h-auto md:h-screen bg-hero3 bg-center bg-cover bg-no-repeat">
          {children}
        </main>
      </body>
    </html>
  );
}
