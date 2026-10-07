import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

// This is the root shell for the whole site. It keeps the nav and footer consistent
// across pages so the club feels like a real brand instead of a random collection of sections.

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Colorado Clash VBC",
    template: "%s | Colorado Clash VBC",
  },
  description:
    "Colorado Clash Volleyball Club builds competitive, confident athletes through development, teamwork, and a strong club culture.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground antialiased transition-colors duration-300">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const key = 'clash-theme';
                const stored = localStorage.getItem(key);
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = stored || (prefersDark ? 'dark' : 'light');
                document.documentElement.dataset.theme = theme;
              })();
            `,
          }}
        />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
