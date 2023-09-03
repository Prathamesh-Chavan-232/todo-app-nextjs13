import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Todo App',
    description: 'Basic Todo Application created using, Nextjs, Prisma, Sqlite & TailwindCSS',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`container mx-auto p-4 bg-slate-800 text-slate-100`}
            >
                {children}
            </body>
        </html>
    )
}
