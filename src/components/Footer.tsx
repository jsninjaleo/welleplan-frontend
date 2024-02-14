"use client"

import Image from "next/image"
import { footerList, socialPaths } from "@/config/footer"
import classNames from "../../node_modules/classnames/index"
import { useRouter } from "next/navigation"
import Button from "@/elements/button"

export default function Footer({ themeColor }: { themeColor: string }) {
	const router = useRouter()

	return (
		<div>
			<div className={classNames("2xl:px-52 lg:px-32 xs:px-10 px-5 pt-16 grid grid-cols-4 gap-4", themeColor)}>
				{footerList.map((list, index) => {
					return (
						<div key={index} className={classNames("mb-10 xl:col-span-1 md:col-span-2 col-span-4", index === 5 ? "col-span-2" : null, themeColor === "bg-mainPurple_dark" ? "text-white" : null)}>
							<p className='font-semibold 2xl:text-2xl text-xl 2xl:mb-6 mb-5'>{list.title}</p>
							<ul>
								{list.options.map((option, key) => {
									return (
										<li
											key={key}
											className='2xl:text-base text-sm mb-3 cursor-pointer'
											onClick={() => {
												option === "Terms and Conditions" ? router.push("/termsAndConditions") : null
											}}
										>
											{option}
										</li>
									)
								})}
							</ul>

							{index === 6 && (
								<div className='2xl:w-40 w-36 2xl:h-10 h-8 2xl:mt-8 mt-6'>
									<Button
										style={{
											fontSize: "2xl:text-lg",
											fontColor: "text-white",
											hoveredFontColor: "hover:text-mainYellow",
											bgColor: "bg-black",
											hoveredBgColor: "",
										}}
										handleClick={() => {
											router.push("/contactUs")
										}}
									>
										{"Let's Connect"}
									</Button>
								</div>
							)}
						</div>
					)
				})}
			</div>

			<div className={classNames("2xl:px-52 xs:px-32 px-5 pt-4 pb-8 grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-y-5", themeColor, themeColor === "bg-mainPurple_dark" ? "text-white" : null)}>
				<div className='2xl:text-base text-sm md:order-1 order-3 md:text-start text-center'>&copy;{new Date().getFullYear()} Welleplan Digital Group d.o.o.</div>

				<div className='cursor-pointer flex justify-center items-center order-2' onClick={() => router.push("/")}>
					<h1 className='font-bold text-white 2xl:text-2xl text-xl'>Welleplan</h1>
				</div>

				<div className='w-auto flex items-center md:justify-end justify-around gap-3 md:order-3 order-1'>
					{socialPaths.map((path, index) => {
						return <Image key={index} src={path} className='cursor-pointer' width={22} height={22} alt='' />
					})}
				</div>
			</div>
		</div>
	)
}
