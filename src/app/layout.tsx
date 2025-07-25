import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeo Clinical Laboratory",
  description: "Modern, trusted diagnostics and health testing services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className }>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
