import React from "react"

import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const poppins = Poppins({
    weight: ["400", "500", "600", "800"],
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Project Template",
    description: "A template for building projects with Next.js",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Script src="https://kit.fontawesome.com/264ffc9fb7.js" />
            <body className={`${poppins.className}`}>
                {/* Content */}
                <main className="flex w-full flex-grow flex-col items-center">
                    {children}
                </main>
            </body>
        </html>
    )
}
