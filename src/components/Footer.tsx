'use client'

import { footerList, socialPaths } from '@/config/footer'
import classNames from "../../node_modules/classnames/index"
import Button from "@/elements/button"

export default function Footer({themeColor}: {themeColor: string}) {
    return (
        <div>
            <div className={classNames('2xl:px-52 px-36 pt-24 grid grid-cols-4 gap-4', themeColor )}>
            <div className='col-span-4 mb-24'>
                <p className='text-white text-5xl font-bold'>Welleplan</p>
            </div>
                {
                    footerList.map((list, index)=>{
                        return (
                            <div key={index} className={classNames('mb-10', index === 5? 'col-span-2' : null, themeColor === 'bg-mainPurple_dark' ? 'text-white' : null)}>
                                <p className='font-medium text-3xl mb-3'>{list.title}</p>
                                <ul>
                                {
                                    list.options.map((option, key)=>{
                                    return (
                                        <li key={key} className='text-lg mb-3'>{option}</li>
                                    )
                                    })
                                }
                                </ul>

                                {
                                index === 6 && (
                                    <div className='w-48 h-12 mt-8'>
                                    <Button
                                        style={
                                        { 
                                            fontSize: 'text-xl', 
                                            fontColor: 'text-white',
                                            hoveredFontColor: 'hover:text-mainYellow',
                                            bgColor: 'bg-black',
                                            hoveredBgColor: ''
                                        }
                                        }
                                        handleClick={()=>{}}
                                    >
                                        Let's Connect
                                    </Button>
                                    </div>
                                )
                                }
                            </div>
                        )
                    })
                }
            </div>

            <div className={classNames('2xl:px-52 px-36 pt-4 pb-8 grid grid-cols-4 gap-4', themeColor, themeColor === 'bg-mainPurple_dark' ? 'text-white' : null)}>
                <div className='col-span-3 text-lg'>
                    ©2023 Welleplan Digital Group d.o.o.
                </div>
                <div className='flex items-center justify-around'>
                    {
                    socialPaths.map((path, index)=>{
                        return (
                        <img key={index} src={path} className='cursor-pointer' alt="" />
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}