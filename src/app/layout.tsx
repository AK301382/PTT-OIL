import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Assuming you still want to use Geist fonts
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

// Updated metadata for PTT Oil website in Farsi
export const metadata: Metadata = {
  title: 'PTT Lubricants - روغن موتور PTT',
  description: 'وبسایت رسمی روغن موتور PTT - ارائه دهنده انواع روغن موتورهای با کیفیت برای خودروهای بنزینی، دیزلی، موتورسیکلت و سه چرخ.',
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased"> {/* Removed font variables from body as they are on html now */}
        {children}
        {/* Footer Section in Farsi */}
        <footer className="text-center text-sm text-gray-500 py-8 mt-12 border-t border-gray-200">
          <p>
            طراحی و توسعه توسط{' '}
            <a 
              href="https://kaweshtechnologies.com" // Replace with the correct URL for Kawesh Technologies
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-600 hover:text-emerald-800 transition-colors duration-300"
            >
              Kawesh Technologies
            </a>
            {' '}- تمامی حقوق محفوظ است © ۲۰۲۵
          </p>
        </footer>
      </body>
    </html>
  );
}

