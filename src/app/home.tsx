"use client"

import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import ScrollToTop from "react-scroll-to-top"
import ScrollTop from "@/elements/scrollTop"

export const metadata: Metadata = {
	title: "Welleplan",
	description: "Welleplan",
}

export default function Home({ children }: { children: React.ReactNode }) {
	const router_name = usePathname()
	const [headerColor, setHeaderColor] = useState<string>("")
	const [footerColor, setFooterColor] = useState<string>("")

	useEffect(() => {
		switch (router_name) {
			case "/":
				setHeaderColor("bg-mainBlue")
				setFooterColor("bg-mainBlue")
				break
			// case '/contactUs':
			//   setHeaderColor('bg-mainPurple');
			//   setFooterColor('bg-mainPurple_dark');
			//   break;
			// case '/services':
			//   setHeaderColor('bg-mainBlue');
			//   setFooterColor('bg-mainBlue_dark');
			//   break;
			default:
				setHeaderColor("bg-mainBlue")
				setFooterColor("bg-mainBlue")
				break
		}
	}, [router_name])

	return (
		<>
			<Header themeColor={headerColor}></Header>

			<main>{children}</main>

			<ScrollToTop smooth className='!bg-transparent !shadow-none !border !border-solid !border-black !rounded-full flex items-center justify-center' component={<ScrollTop />}></ScrollToTop>

			<Footer themeColor={footerColor}></Footer>
		</>
	)
}
