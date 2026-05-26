import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
    title: {
    default: "Best Dental Clinic in Indore | Dental Implants, Braces & RCT",
    template: "%s | Dental Clinic in Indore",
  },
  description:
    "Looking for the best dentist in Indore? Get expert dental care including implants, root canal, braces, and cosmetic dentistry with advanced technology and experienced dentists.",

  keywords: [
    "dentist in Indore",
    "dental clinic Indore",
    "dental implants Indore",
    "root canal Indore",
    "braces treatment Indore",
    "cosmetic dentistry Indore",
  ],

  authors: [{ name: "Dental Clinic Indore" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}