import { Vazirmatn } from 'next/font/google';
import './globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-vazirmatn',
});

export const metadata = {
  title: 'PTT Lubricants - روغن موتور PTT',
  description: 'وبسایت رسمی روغن موتور PTT - ارائه دهنده انواع روغن موتورهای با کیفیت برای خودروهای بنزینی، دیزلی، موتورسیکلت و سه چرخ.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} font-sans`}>
      <body>
        {children}

        {/* بخش فوتر جدید با لینک */}
        <footer className="text-center text-sm text-gray-500 py-8 mt-12 border-t border-gray-200">
          <p>
            طراحی و توسعه توسط{' '}
            <a href="https://kaweshtechnologies.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 transition-colors duration-300">
              Kawesh Technologies
            </a>
            {' '}- تمامی حقوق محفوظ است © ۲۰۲۵
          </p>
        </footer>
      </body>
    </html>
  );
}

