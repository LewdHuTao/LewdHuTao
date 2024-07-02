import { Archivo } from "next/font/google";
import SmoothScrolling from "../components/Smoothscrolling";
import "./globals.css";

const inter = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "LewdHuTao",
  description: "Uhhh.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
