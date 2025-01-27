import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { handleGetUser } from "@/lib/server/auth";
import { Providers } from "@/components/Layouts/Providers";
import { MainLayout } from "@/components/Layouts/MainLayout";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | ALLAN-CHAT",
        default: "HOME ALLAN-CHAT"
    },
    icons: {
        icon: "/logo3.png"
    }
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await handleGetUser()

    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body className={nunito.className}>
                <Providers>
            
                    <MainLayout user={user}>
                        {children}
                    </MainLayout>
                </Providers>
            </body>
        </html>
    );
}
