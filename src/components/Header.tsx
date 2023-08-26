'use client'

import { headerNav } from "@/config/header"
import Button from "@/elements/button"
import classNames from "../../node_modules/classnames/index"
import { useRouter } from 'next/navigation'

export default function Header({themeColor}: {themeColor: string}) {
    const router = useRouter();

    return (
        <div className={classNames('fixed grid grid-cols-3 gap-4 items-center justify-between top-0 2xl:px-52 px-36 pt-16 pb-6 w-full text-white z-50', themeColor)}>
            <div>
                <h1 
                    className="font-bold text-6xl cursor-pointer"
                    onClick={()=>{router.push('/')}}
                >
                    Welleplan
                </h1>
            </div>
            <div className="col-span-2 flex items-center justify-between">
                {
                    headerNav.map((option, index)=>{
                        return (
                            <div key={index}>
                                <p className="cursor-pointer font-medium text-xl hover:text-mainYellow transition duration-150 ease-in-out">{option}</p>
                            </div>
                        )
                    })
                }
                <div className="w-52 h-12">
                    <Button
                        style={
                            { 
                                fontSize: 'text-xl', 
                                fontColor: themeColor === 'bg-mainPurple' ? 'text-mainPurple' : 'text-mainBlue',
                                hoveredFontColor: 'hover:text-white',
                                bgColor: 'bg-white', 
                                hoveredBgColor: 'hover:bg-mainYellow' 
                            }
                        }
                        handleClick={()=>{router.push('/contactUs')}}
                    >
                        Contact us
                    </Button>
                </div>
            </div>
        </div>
    )
}