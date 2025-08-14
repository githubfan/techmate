import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  weight: ['400', '700'],
  variable: "--font-atkinson",
  subsets: ["latin"],
});

export const metadata = {
  title: "Techmate - Opening Doors to Technology for Everyone",
  description: "A community initiative dedicated to breaking down barriers and opening pathways into the technology sector for people from underrepresented groups.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body
        className={`${atkinsonHyperlegible.variable} antialiased font-atkinson`}
      >
        {children}
      </body>
    </html>
  );
}
