'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/elements/button'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import AnimationBrand from '@/components/Home/AnimationBrand'


export default function ContactUs() {
  const first_section = useRef(null);
  const first_section_view = useInView(first_section);
  const router = useRouter();

  return (
    <div>
      <div className="bg-gradient-to-r from-darkYellow_gradient to-lightYellow_gradient grid grid-cols-2 gap-20 pt-28 pb-4 2xl:px-52 px-32 relative">
        <div className='flex items-center'>
          <div>
            <p className='text-5xl mb-4'>Our development</p>
            <p className='text-5xl font-bold mb-6'>Services</p>
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
        className="bg-white grid grid-cols-2 gap-20 py-24 2xl:px-52 px-32 relative"
        ref={first_section}
      >
        <motion.div 
          initial={{ x:-200, opacity: 0}}
          animate={first_section_view? { x: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='text-4xl font-bold mr-2 p-3 rounded-lg bg-mainBlue_light'>Web</p>
              <p className='text-4xl'>development</p>
            </div>

            <p className='text-lg mb-6'>
              We are proven software engineering and consulting team.<br></br>
              We partner with companies around the globe to create custom solutions
              that drive your business success.
            </p>

            <div className='w-28 h-10'>
              <Button
                style={
                  { 
                      fontSize: 'text-lg', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainBlue', 
                      hoveredBgColor: 'hover:bg-mainYellow'
                  }
                }
                handleClick={()=>{router.push('/services/webDevelopment')}}
              >
                  {"More"}
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 200, opacity: 0}}
          animate={first_section_view? { y: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex justify-center items-center'
        >
          <Image src="/images/image_landing1.svg" width={578} height={385} alt="" />
        </motion.div>

        <motion.div 
          initial={{ x:-200, opacity: 0}}
          animate={first_section_view? { x: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.7 } : {}}
          className='flex justify-center items-center'
        >
          <Image src="/images/image_landing2.svg" width={400} height={400} alt="" />
        </motion.div>

        <motion.div 
          initial={{ y: 200, opacity: 0}}
          animate={first_section_view? { y: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.7 } : {}}
          className='flex items-center'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='text-4xl font-bold mr-2 p-3 rounded-lg bg-mainBlue_light'>Mobile </p>
              <p className='text-4xl'>development</p>
            </div>

            <p className='text-lg mb-6'>
              We are proven software engineering and consulting team.<br></br>
              We partner with companies around the globe to create custom solutions
              that drive your business success.
            </p>

            <div className='w-28 h-10'>
              <Button
                style={
                  { 
                      fontSize: 'text-lg', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainBlue', 
                      hoveredBgColor: 'hover:bg-mainYellow'
                  }
                }
                handleClick={()=>{router.push('/services/mobileDevelopment')}}
              >
                  {"More"}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
