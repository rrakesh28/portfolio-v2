import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const firaCode = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Concept Portfolio",
  description: "Concept Portfolio Developed By Rebbavarapu Rakesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased bg-primary-base border border-lines h-screen flex flex-col`}
      >
        <div className="hidden lg:block">
          <Header />
        </div>
        <div className="h-screen w-screen lg:hidden grid place-items-center">
          <p className="text-white text-center">
            Currently only available for desktops
          </p>
        </div>
        <div className="flex-1 hidden lg:block">{children}</div>
        <div className="hidden lg:block">
          <Footer />
        </div>
      </body>
    </html>
  );
}
