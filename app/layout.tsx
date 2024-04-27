import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: process.env.METADATA_TITLE || "",
    description: process.env.METADATA_DESCRIPTION || "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}
