"use client";
import "./globals.css";
import { Inter } from "next/font/google";

// font setting
const inter = Inter({
  subsets: ["latin"],
});
// components
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import { usePathname } from "next/navigation";
import Transition from "../components/Transition";
import { AnimatePresence, motion } from "framer-motion";

export const metadata = {
  title: "Portfolio Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const pathName = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="page bg-site text-white bg-cover bg-no-repeat relative">
          <TopLeftImg />
          <Nav />
          <Header />
          <AnimatePresence mode="wait">
            <motion.div className="h-full" key={pathName}>
              <Transition />
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}