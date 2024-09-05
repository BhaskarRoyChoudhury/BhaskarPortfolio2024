import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Bhaskar Roy Choudhury Portfolio",
  description: "Bhaskar Roy Choudhury Portfolio 2024"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
