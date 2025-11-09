import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Full?Stack Developer Portfolio",
    template: "%s ? Full?Stack Dev",
  },
  description:
    "Unique, stylish portfolio of a full?stack developer. Projects, skills, contact.",
  keywords: [
    "fullstack",
    "portfolio",
    "nextjs",
    "react",
    "typescript",
    "tailwind",
  ],
  metadataBase: new URL("https://agentic-68e2bb0f.vercel.app"),
  openGraph: {
    title: "Full?Stack Developer Portfolio",
    description:
      "Unique, stylish portfolio of a full?stack developer. Projects, skills, contact.",
    url: "https://agentic-68e2bb0f.vercel.app",
    siteName: "Full?Stack Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Portfolio OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full?Stack Developer Portfolio",
    description:
      "Unique, stylish portfolio of a full?stack developer. Projects, skills, contact.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
