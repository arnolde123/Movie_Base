import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

import { cookies } from "next/headers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Movie Base",
  description: "Database containing movies and shows, like IMdb",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
  
  
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-600 dark:bg-black`}
          
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            defaultOpen="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            <SearchBox/>
            <Navbar/>
            {children}
          </ThemeProvider>
        </body>
      </html>

    </ClerkProvider>
  );
}
