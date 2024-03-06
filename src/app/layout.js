import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daniel Marinescu Portfolio App",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
