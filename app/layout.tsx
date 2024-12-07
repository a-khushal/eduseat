import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./providers";
// import { ModeToggle } from "@/components/ui/mode-toggler";

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

export const metadata: Metadata = {
  title: "eduseat.in",
  description: "Get top notch engineering and medical councelling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* <div className="absolute min-h-screen bg-gray-50 w-full">
            <div className="absolute inset-0 gradient-background z-10"></div> */}
            <Provider>
              {/* <ModeToggle /> */}
              {children}
            </Provider>
          {/* </div> */}
        </body>
      </html>
  );
}
