import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
  description: 'Blog Website made with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='bg-white text-black prose prose-xl prose-slate dark:prose-invert mx-auto min-h-screen'>
          <Header />
          <div className='flex overflow-hidden flex-col min-h-screen'>
            <div className='max-w-screen-2lg mx-auto mt-11'>
              {children}
            </div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  )
}
