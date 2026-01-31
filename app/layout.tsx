import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
    metadataBase: new URL("https://farookhridoy.com"),
    title: {
        default: "MD. Omar Farook Hridoy | Software Engineer",
        template: "%s | MD. Omar Farook Hridoy",
    },
    description: "Software Engineer with 6+ years of experience in PHP, Laravel, React, and enterprise ERP development. 100+ successful projects delivered across e-commerce, content management, and enterprise solutions.",
    keywords: [
        "Software Engineer",
        "Full Stack Developer",
        "Laravel Developer",
        "PHP Developer",
        "React Developer",
        "ERP Development",
        "Web Development",
        "Bangladesh Developer",
        "Dhaka Developer",
    ],
    authors: [{ name: "MD. Omar Farook Hridoy", url: "https://farookhridoy.com" }],
    creator: "MD. Omar Farook Hridoy",
    icons: {
        icon: [
            { url: "/favicon.png", type: "image/png" },
            { url: "/favicon.ico", sizes: "any" },
        ],
        apple: "/favicon.png",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://farookhridoy.com",
        title: "MD. Omar Farook Hridoy | Software Engineer",
        description: "Software Engineer with 6+ years of experience in PHP, Laravel, React, and enterprise ERP development.",
        siteName: "MD. Omar Farook Hridoy Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "MD. Omar Farook Hridoy | Software Engineer",
        description: "Software Engineer with 6+ years of experience in PHP, Laravel, React, and enterprise ERP development.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Providers>
                        <TooltipProvider>
                            {children}
                            <Toaster />
                            <Sonner />
                        </TooltipProvider>
                    </Providers>
                </ThemeProvider>
            </body>
        </html>
    );
}
