"use client"

import { useState } from "react"
import { headerNav } from "@/config/header"
import Button from "@/elements/button"
import Image from "next/image"
import classNames from "../../node_modules/classnames/index"
import { useRouter } from "next/navigation"

export default function Header({ themeColor }: { themeColor: string }) {
	const router = useRouter()

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`

	function navigate(route: string): void {
		switch (route) {
			case "Our Process":
				router.push("/process")
				break
			case "Services":
				router.push("/services")
				break
			case "Cases":
				router.push("/cases")
				break
			case "Careers":
				router.push("/careers")
				break
			case "Blog":
				router.push("/blog")
				break
			default:
				router.push("/")
				break
		}
	}

	return (
		<>
			<div className={classNames("fixed h-28 grid xl:grid-cols-3 grid-cols-4 gap-4 items-center justify-between top-0 2xl:px-52 lg:px-32 xs:px-10 px-5 w-full text-white z-40", themeColor)}>
				<div className='max-md:col-span-2'>
					<h1
						className='font-bold 2xl:text-3xl text-2xl cursor-pointer'
						onClick={() => {
							router.push("/")
						}}
					>
						Welleplan
					</h1>
				</div>
				<div className='xl:col-span-2 col-span-3 max-md:col-span-2'>
					<div className='max-md:hidden ml-auto flex items-center justify-end gap-5'>
						{headerNav.map((option, index) => {
							return (
								<div key={index}>
									<p className='cursor-pointer 2xl:text-lg text-md hover:text-mainYellow transition duration-150 ease-in-out' onClick={() => navigate(option)}>
										{option}
									</p>
								</div>
							)
						})}
						<div className='2xl:w-40 w-32 2xl:h-10 h-8'>
							<Button
								style={{
									fontSize: "2xl:text-lg text-md",
									fontColor: themeColor === "bg-mainPurple" ? "text-mainPurple" : "text-mainBlue",
									hoveredFontColor: "hover:text-white",
									bgColor: "bg-white",
									hoveredBgColor: "hover:bg-mainYellow",
								}}
								handleClick={() => {
									router.push("/contactUs")
								}}
							>
								Contact Us
							</Button>
						</div>
					</div>
					<div className='md:hidden flex items-center justify-end'>
						<button className='flex flex-col h-10 w-10 justify-center items-center group scale-75' onClick={() => setIsOpen(!isOpen)}>
							<div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-3 opacity-90 group-hover:opacity-100" : "opacity-90 group-hover:opacity-100"}`} />
							<div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-90 group-hover:opacity-100"}`} />
							<div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-3 opacity-90 group-hover:opacity-100" : "opacity-90 group-hover:opacity-100"}`} />
						</button>
					</div>
				</div>
			</div>
			<div className={classNames("fixed xxs:w-[280px] w-full h-screen bg-mainPurple z-50 transition-all ease-in-out duration-200", isOpen ? "left-0" : "-left-[500px]")}>
				<div className="px-10 py-10">
					<div className="flex justify-between items-center mb-10">
						<h1
							className='font-bold text-3xl text-white cursor-pointer'
							onClick={() => {
								router.push("/")
							}}
						>
							Welleplan
						</h1>
						<div className="xxs:hidden" onClick={() => setIsOpen(false)}>
							<Image src='/images/icon_close.svg' width={20} height={20} alt="close"></Image>
						</div>
					</div>
					{headerNav.map((option, index) => {
						return (
							<div key={index} className="text-center mb-5 text-white">
								<p 
									className='cursor-pointer text-xl hover:text-mainYellow transition duration-150 ease-in-out' 
									onClick={() => { navigate(option); setIsOpen(false); }}>
									{option}
								</p>
							</div>
						)
					})}
					<div 
						className="cursor-pointer text-xl text-center text-white hover:text-mainYellow transition duration-150 ease-in-out"
						onClick={() => { router.push('contactUs'); setIsOpen(false); }}>
						Contact Us
					</div>
				</div>
			</div>
		</>
	)
}
