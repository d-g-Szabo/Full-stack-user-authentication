import { Inter_Tight } from "next/font/google";
// next.js has Google Fonts built-in, so you can use the Inter font like this
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// configure the font properties
const inter = Inter_Tight({
  subsets: ["latin"],
  weights: "400",
});

export const metadata = {
  title: "Coaster Rollers",
  description:
    "The theme park of your steampunk dreams! Lifes a rollercoaster, you have just got to ride it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* add the font to the body tag */}
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
