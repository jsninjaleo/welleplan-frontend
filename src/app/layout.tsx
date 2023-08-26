'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ScrollToTop from "react-scroll-to-top"
import ScrollTop from '@/elements/scrollTop'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Wellplan',
//   description: 'Wellplan',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router_name = usePathname();
  const [ headerColor, setHeaderColor ] = useState<string>('');
  const [ footerColor, setFooterColor ] = useState<string>('');

  useEffect(()=>{
    switch(router_name) {
      case '/':
        setHeaderColor('bg-mainBlue');
        setFooterColor('bg-mainBlue');
        break;
      case '/contactUs':
        setHeaderColor('bg-mainPurple');
        setFooterColor('bg-mainPurple_dark');
        break;
      case '/services':
        setHeaderColor('bg-mainBlue');
        setFooterColor('bg-mainBlue_dark');
        break;
      default:
        setHeaderColor('bg-mainBlue');
        setFooterColor('bg-mainBlue');
        break
    }
  }, [router_name]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header themeColor={headerColor} ></Header>
        <main>{children}</main>
        <ScrollToTop
          smooth
          className='!bg-transparent !shadow-none !border !border-solid !border-black !rounded-full flex items-center justify-center'
          component={<ScrollTop />}
        >
        </ScrollToTop>
        <Footer themeColor={footerColor}></Footer>
      </body>
    </html>
  )
}
