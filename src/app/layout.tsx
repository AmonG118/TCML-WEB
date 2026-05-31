import type { Metadata } from "next";
import { Fraunces, DM_Sans, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-cjk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TCML – Taiwan Center for Mandarin Learning",
  description:
    "Discover Mandarin learning centers worldwide. Funded by the Overseas Community Affairs Council (OCAC), Taiwan.",
  openGraph: {
    title: "TCML – Taiwan Center for Mandarin Learning",
    description:
      "Discover Mandarin learning centers worldwide. Funded by OCAC, Taiwan.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${notoSansTC.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
