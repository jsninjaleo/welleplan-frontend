'use client'

import { headerNav } from "@/config/header"
import Button from "@/elements/button"
import classNames from "../../node_modules/classnames/index"
import { useRouter } from 'next/navigation'

export default function Header({themeColor}: {themeColor: string}) {
    const router = useRouter();

    function navigate(route: string): void {
        switch(route) {
            case "Our Process":
                router.push('/ourProcess');
                break;
            case "Services":
                router.push('/services');
                break;
            case "Cases":
                router.push('/cases');
                break;
            case "Careers":
                router.push('/careers');
                break;
            case "Blog":
                router.push('/blog');
                break;
            default:
                router.push('/');
                break;
        }
    }

    return (
        <div className={classNames('fixed grid xl:grid-cols-3 grid-cols-4 gap-4 items-center justify-between top-0 2xl:px-52 px-32 pt-10 pb-8 w-full text-white z-50', themeColor)}>
            <div>
                <h1 
                    className="font-bold 2xl:text-3xl text-2xl cursor-pointer"
                    onClick={()=>{router.push('/')}}
                >
                    Welleplan
                </h1>
            </div>
            <div className="xl:col-span-2 col-span-3">
                <div className="ml-auto 2xl:w-5/6 xl:11/12 w-full flex items-center justify-between">
                    {
                        headerNav.map((option, index)=>{
                            return (
                                <div key={index}>
                                    <p 
                                        className="cursor-pointer 2xl:text-lg text-md hover:text-mainYellow transition duration-150 ease-in-out"
                                        onClick={()=>navigate(option)}
                                    >
                                        {option}
                                    </p>
                                </div>
                            )
                        })
                    }
                    <div className="2xl:w-40 w-32 2xl:h-10 h-8">
                        <Button
                            style={
                                { 
                                    fontSize: '2xl:text-lg text-md', 
                                    fontColor: themeColor === 'bg-mainPurple' ? 'text-mainPurple' : 'text-mainBlue',
                                    hoveredFontColor: 'hover:text-white',
                                    bgColor: 'bg-white', 
                                    hoveredBgColor: 'hover:bg-mainYellow' 
                                }
                            }
                            handleClick={()=>{router.push('/contactUs')}}
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}