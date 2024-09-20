import localFont from "next/font/local";
import "./globals.css";
import CommonLayout from "../components/client-view/common-layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "My Portfolio Harshit",
  description: "Explore my portfolio to see a curated selection of my work, including web development projects, design samples, and other creative endeavors. Learn more about my skills, experience, and how I can help bring your vision to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}