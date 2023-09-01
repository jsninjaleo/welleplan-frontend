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
                    className="font-bold text-4xl cursor-pointer"
                    onClick={()=>{router.push('/')}}
                >
                    Welleplan
                </h1>
            </div>
            <div className="xl:col-span-2 col-span-3 flex items-center justify-between">
                {
                    headerNav.map((option, index)=>{
                        return (
                            <div key={index}>
                                <p 
                                    className="cursor-pointer font-medium text-lg hover:text-mainYellow transition duration-150 ease-in-out"
                                    onClick={()=>navigate(option)}
                                >
                                    {option}
                                </p>
                            </div>
                        )
                    })
                }
                <div className="w-40 h-10">
                    <Button
                        style={
                            { 
                                fontSize: 'text-lg', 
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