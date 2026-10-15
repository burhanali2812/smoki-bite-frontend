import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";

const head = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-head", display: "swap" });
const body = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-body", display: "swap" });

const title = "Smoki Bite | Smoky Shawarma, Wraps, Burgers & Loaded Fries";
const description = "Smoki Bite serves smoky chicken shawarma, grill shawarma, wraps, beef burgers, loaded fries and spring rolls made with fresh ingredients. Order online. Har Bite Mein Fire!";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Smoki Bite" },
  description,
  keywords: ["Smoki Bite", "shawarma", "grill shawarma", "loaded fries", "beef burger", "spring roll", "fast food Pakistan", "order shawarma online"],
  alternates: { canonical: "/" },
  openGraph: { title, description, url: site.url, siteName: "Smoki Bite", images: [{ url: "/img/logo-2line.jpg", width: 1389, height: 1600 }], locale: "en_PK", type: "website" },
  twitter: { card: "summary_large_image", title, description, images: ["/img/logo-2line.jpg"] },
  robots: { index: true, follow: true },
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
