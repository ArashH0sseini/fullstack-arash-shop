import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import { ShoppingCartContextProvider } from "@/context/ShoppingCartContext";

export const metadata: Metadata = {
  title: "وبسایت فروشگاهی آرش شاپ",
  description: "Fullstack Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <ShoppingCartContextProvider>
          <Layout>{children}</Layout>
        </ShoppingCartContextProvider>
      </body>
    </html>
  );
}
