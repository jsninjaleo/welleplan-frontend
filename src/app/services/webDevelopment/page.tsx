'use client'

import Image from 'next/image'
import AnimationBrand from '@/components/Home/AnimationBrand'
import { webDevelopmentList } from '@/config/development'

export default function ContactUs() {

  return (
    <div>
      <div className="bg-gradient-to-r from-60% from-mainBlue to-lightYellow_gradient sm:h-[500px] xs:h-[700px] h-[600px] grid lg:grid-cols-2 grid-cols-1 lg:gap-20 lg:pt-52 pt-40 pb-10 2xl:px-52 lg:px-32 xs:px-10 px-5 relative">
        <div className='flex sm:items-center lg:w-full sm:w-2/3 w-full'>
          <div>
            <div className='flex items-center mb-6'>
              <p className='2xl:text-4xl xs:text-3xl text-2xl font-bold mr-3'>Web</p>
              <p className='2xl:text-4xl xs:text-3xl text-2xl'>development</p>
            </div>

            <p className='2xl:text-xl xs:text-lg text-base font-medium !leading-relaxed'>
              We are proven software engineering and consulting team.<br></br>
              We partner with companies around the globe to create custom solutions<br></br>
              that drive your business success.
            </p>
          </div>
        </div>

        <div className='lg:relative absolute lg:bottom-0 bottom-16 xs:bottom-10 lg:right-0 right-[40px]'>
          <div className='lg:w-full w-[300px] h-[200px] lg:h-full'>
            <AnimationBrand></AnimationBrand>
          </div>
        </div>
      </div>

      <div 
        className="bg-white grid md:grid-cols-3 xs:grid-cols-2 lg:gap-20 gap-10 lg:py-24 py-14 2xl:px-52 lg:px-32 xs:px-10 px-5 relative"
      >
        <div className='md:col-span-3 xs:col-span-2 flex items-center'>
          <p className='2xl:text-3xl xs:text-2xl text-xl font-bold mr-3'>Expertise</p>
          <p className='2xl:text-3xl xs:text-2xl text-xl'>we offer</p>
        </div>

        {
          webDevelopmentList.map((list, index)=> {
            return (
              <div key={index} className='col-span-1'>
                <Image src={list.img} width={46} height={46} alt="" />
                <p className='2xl:text-xl xs:text-lg text-base font-semibold sm:mt-6 mt-4 mb-4'>{list.title}</p>
      
                <ul>
                  {
                    list.options.map((option, key)=> {
                      return (
                        <li key={key} className='sm:mb-2 mb-1 2xl:text-base text-sm'>{'- ' + option}</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
