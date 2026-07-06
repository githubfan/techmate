import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '700'],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata = {
  title: "TECHMATE - Opening doors to technology for everyone",
  description: "A community initiative dedicated to breaking down barriers and opening pathways into the technology sector for people from underrepresented groups.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body
        className={`${dmSans.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
