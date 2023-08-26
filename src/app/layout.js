import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Head from 'next/head'
import FloatingContainer from "@/components/FloatingContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rakesh Rebbavarapur",
  description: "Rakesh Rebbavarapu Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <FloatingContainer />
      </body>
    </html>
  );
}
