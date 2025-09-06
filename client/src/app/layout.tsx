import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ClientProvider } from "./client-provider";

export const metadata: Metadata = {
  title: "Evalynn.ai - IELTS Scoring Platform",
  description: "AI-powered IELTS writing assessment and scoring platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
