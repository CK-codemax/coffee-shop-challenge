import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// This is NextJS metadata component. It contains the metadata which is supposed to be written in the head tag

export const metadata = {
  title: "iPhone14ProMax",
  description: "This is a static website design of the iPhone 14 Pro max and a simple animation based on the coffee room first hackathon.",
};

//This is the root layout component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
