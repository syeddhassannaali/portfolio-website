import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

import { fontVariables } from "@/configs/font";
import { siteConfig } from "@/configs/site";
import { metadata } from "@/configs/metadata";
import { viewport } from "@/configs/viewport";

import { ModalsProvider } from "@/providers/modals-provider";
import LenisProvider from "@/providers/lenis-provider";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import ConversationModal from "@/components/partials/conversation-modal";

import StructuredData from "@/utils/structured-data";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import "@/styles/includes.css";

export { metadata };
export { viewport };

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <body
        className={cn("antialiased", fontVariables)}
        suppressHydrationWarning
      >
        <StructuredData />

        <ModalsProvider>
          <LenisProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LenisProvider>

          <ConversationModal />

          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 4000,
            }}
          />
        </ModalsProvider>
      </body>
    </html>
  );
}
