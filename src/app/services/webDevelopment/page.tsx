'use client'

import Image from 'next/image'
import AnimationBrand from '@/components/Home/AnimationBrand'
import { webDevelopmentList } from '@/config/development'

export default function ContactUs() {

  return (
    <div>
      <div className="bg-gradient-to-r from-60% from-mainBlue to-lightYellow_gradient grid grid-cols-2 gap-20 pt-28 pb-4 2xl:px-52 px-32 relative">
        <div className='flex items-center'>
          <div>
            <div className='flex items-center mb-6'>
              <p className='text-5xl font-bold mr-3'>Web</p>
              <p className='text-5xl'>development</p>
            </div>

            <p className='text-xl font-medium'>
              We are proven software engineering and consulting team.<br></br>
              We partner with companies around the globe to create custom solutions<br></br>
              that drive your business success.
            </p>
          </div>
        </div>

        <div className='h-[480px]'>
          <AnimationBrand></AnimationBrand>
        </div>
      </div>

      <div 
        className="bg-white grid grid-cols-3 gap-20 py-24 2xl:px-52 px-32 relative"
      >
        <div className='col-span-3 flex items-center'>
          <p className='text-4xl font-bold mr-3'>Expertise</p>
          <p className='text-4xl'>we offer</p>
        </div>

        {
          webDevelopmentList.map((list, index)=> {
            return (
              <div key={index}>
                <Image src={list.img} width={46} height={46} alt="" />
                <p className='text-2xl font-medium mt-6 mb-4'>{list.title}</p>
      
                <ul>
                  {
                    list.options.map((option, key)=> {
                      return (
                        <li key={key} className='mb-2'>{'- ' + option}</li>
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
