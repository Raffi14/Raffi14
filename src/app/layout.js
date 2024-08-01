import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"]
  
 });

export const metadata = {
  title: "Muhammad Raffi Fabiansyah",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-hide scroll-smooth snap-y snap-mandatory">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

