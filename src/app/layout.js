import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'State Management Praktikum',
  description: 'Belajar state management di Nextt.js',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <main className="container mx-auto p-4">
            {children}
            <div className="mt-8 p-4 border-t">
              <ThemeToggle/>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}