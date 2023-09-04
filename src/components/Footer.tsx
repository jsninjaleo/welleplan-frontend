'use client'

import Image from 'next/image'
import { footerList, socialPaths } from '@/config/footer'
import classNames from "../../node_modules/classnames/index"
import { useRouter } from 'next/navigation'
import Button from "@/elements/button"

export default function Footer({themeColor}: {themeColor: string}) {
    const router = useRouter();

    return (
        <div>
            <div className={classNames('2xl:px-52 px-32 pt-16 grid grid-cols-4 gap-4', themeColor )}>
                {
                    footerList.map((list, index)=>{
                        return (
                            <div key={index} className={classNames('mb-10', index === 5? 'col-span-2' : null, themeColor === 'bg-mainPurple_dark' ? 'text-white' : null)}>
                                <p className='font-semibold 2xl:text-2xl text-xl 2xl:mb-6 mb-5'>{list.title}</p>
                                <ul>
                                {
                                    list.options.map((option, key)=>{
                                    return (
                                        <li key={key} className='2xl:text-base text-sm mb-3'>{option}</li>
                                    )
                                    })
                                }
                                </ul>

                                {
                                index === 6 && (
                                    <div className='2xl:w-40 w-36 2xl:h-10 h-8 2xl:mt-8 mt-6'>
                                    <Button
                                        style={
                                        { 
                                            fontSize: '2xl:text-lg', 
                                            fontColor: 'text-white',
                                            hoveredFontColor: 'hover:text-mainYellow',
                                            bgColor: 'bg-black',
                                            hoveredBgColor: ''
                                        }
                                        }
                                        handleClick={()=>{}}
                                    >
                                        {"Let's Connect"}
                                    </Button>
                                    </div>
                                )
                                }
                            </div>
                        )
                    })
                }
            </div>

            <div className={classNames('2xl:px-52 px-32 pt-4 pb-8 grid grid-cols-8 gap-4', themeColor, themeColor === 'bg-mainPurple_dark' ? 'text-white' : null)}>
                <div className='col-span-3 2xl:text-base text-sm flex items-center'>
                    ©2023 Welleplan Digital Group d.o.o.
                </div>

                <div 
                    className='col-span-2 flex justify-center cursor-pointer'
                    onClick={()=>router.push('/')}
                >
                    <h1 className='font-bold text-white 2xl:text-2xl text-xl'>Welleplan</h1>
                </div>

                <div></div>
                
                <div className='flex items-center justify-between col-span-2'>
                    {
                    socialPaths.map((path, index)=>{
                        return (
                        <Image key={index} src={path} className='cursor-pointer' width={22} height={22} alt="" />
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}