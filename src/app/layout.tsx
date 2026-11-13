import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import "./globals.css";

export const metadata: Metadata = {
  title: "solid fitness | purasawalkam, chennai",
  description: "train with purpose at solid fitness in purasawalkam, chennai.",
  applicationName: siteConfig.name,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
