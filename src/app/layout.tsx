/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientLayout from "./clientLayout";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Heron Analytica",
  description: "Unlock Targeted Marketing, Personalize Customer Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html lang="en">
      <head>
        <script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          // @ts-ignore
          strategy="afterInteractive"
        />

        <script
          id="google-analytics"
          // @ts-ignore
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </script>
      </head>
      <body className={`${roboto.variable}`}>
        {/* Render the client-side layout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
