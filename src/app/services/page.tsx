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
      <div className="bg-gradient-to-r from-darkYellow_gradient to-lightYellow_gradient lg:h-auto sm:h-[600px] h-[700px] grid lg:grid-cols-2 grid-cols-1 lg:gap-20 lg:pt-52 pt-40 pb-10 2xl:px-52 lg:px-32 xs:px-10 px-5 relative">
        <div className='flex sm:items-center lg:w-full sm:w-2/3 w-full'>
          <div>
            <p className='2xl:text-4xl xs:text-3xl text-2xl xs:mb-4 mb-2'>Our development</p>
            <p className='2xl:text-4xl xs:text-3xl text-2xl font-bold mb-6'>Services</p>
            <p className='2xl:text-xl xs:text-lg text-base font-medium !leading-relaxed'>
              We are proven software engineering and consulting team.<br></br>
              We partner with companies around the globe to create custom solutions<br></br>
              that drive your business success.
            </p>
          </div>
        </div>

         <div className='lg:relative absolute lg:bottom-0 bottom-20 xs:bottom-10 lg:right-0 right-[40px]'>
          <div className='lg:w-full w-[300px] h-[200px] lg:h-full'>
            <AnimationBrand></AnimationBrand>
          </div>
        </div>
      </div>

      <div 
        className="bg-white grid md:grid-cols-2 grid-cols-1 2xl:gap-20 md:gap-16 gap-y-10 sm:py-24 py-16 2xl:px-52 lg:px-32 xs:px-10 px-5 relative"
        ref={first_section}
      >
        <motion.div 
          initial={{ x:-200, opacity: 0}}
          animate={first_section_view? { x: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center md:order-1 order-2'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl sm:text-3xl xs:text-xl text-lg font-bold mr-2 sm:p-3 p-2 rounded-lg bg-mainBlue_light'>Web</p>
              <p className='2xl:text-4xl sm:text-3xl xs:text-xl text-lg'>development</p>
            </div>

            <p className='2xl:text-lg sm:text-base text-sm mb-6 !leading-relaxed'>
              Our web development team crafts responsive and feature-rich websites using cutting-edge technologies. 
              We ensure your online presence is not only visually appealing but also functional and user-friendly.
            </p>

            <div className='2xl:w-28 w-20 2xl:h-10 h-8'>
              <Button
                style={
                  { 
                      fontSize: '2xl:text-lg', 
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
          className='flex justify-center items-center md:order-2 order-1'
        >
          <Image src="/images/image_landing1.svg" className='xl:w-[405px] md:w-full sm:w-2/3 w-full xl:h-[270px]' width={405} height={270} alt="" />
        </motion.div>

        <motion.div 
          initial={{ x:-200, opacity: 0}}
          animate={first_section_view? { x: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.7 } : {}}
          className='flex justify-center items-center order-3'
        >
          <Image src="/images/image_landing2.svg" className='2xl:w-[400] xs:w-[280px] w-full' width={400} height={400} alt="" />
        </motion.div>

        <motion.div 
          initial={{ y: 200, opacity: 0}}
          animate={first_section_view? { y: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.7 } : {}}
          className='flex items-center order-4'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl sm:text-3xl xs:text-xl text-lg font-bold mr-2 sm:p-3 p-2 rounded-lg bg-mainBlue_light'>Mobile </p>
              <p className='2xl:text-4xl sm:text-3xl xs:text-xl text-lg'>development</p>
            </div>

            <p className='2xl:text-lg sm:text-base text-sm !leading-relaxed mb-6'>
              Reach your audience on their devices with our mobile app development services. 
              We create apps for iOS and Android that are intuitive, engaging, and aligned with your business goals.
            </p>

            <div className='2xl:w-28 w-20 2xl:h-10 h-8'>
              <Button
                style={
                  { 
                      fontSize: '2xl:text-lg', 
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

        <motion.div 
          initial={{ x:-200, opacity: 0}}
          animate={first_section_view? { x: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center md:order-5 order-6'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl sm:text-3xl xs:text-xl text-lg font-bold mr-2 sm:p-3 p-2 rounded-lg bg-mainBlue_light'>UI/UX</p>
              <p className='2xl:text-4xl sm:text-3xl xs:text-xl text-lg'>design</p>
            </div>

            <p className='2xl:text-lg sm:text-base text-sm mb-6 !leading-relaxed'>
              A great user experience is paramount. 
              Our designers create visually stunning and intuitive interfaces that enhance user engagement and satisfaction.
            </p>

            {/* <div className='2xl:w-28 w-20 2xl:h-10 h-8'>
              <Button
                style={
                  { 
                      fontSize: '2xl:text-lg', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainBlue', 
                      hoveredBgColor: 'hover:bg-mainYellow'
                  }
                }
                handleClick={()=>{}}
              >
                  {"More"}
              </Button>
            </div> */}
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 200, opacity: 0}}
          animate={first_section_view? { y: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex justify-center items-center md:order-6 order-5'
        >
          <Image src="/images/image_landing1.svg" className='2xl:w-[578px] md:w-full sm:w-2/3 w-full' width={578} height={385} alt="" />
        </motion.div>

        <motion.div 
          initial={{ x:-200, opacity: 0}}
          animate={first_section_view? { x: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.7 } : {}}
          className='flex justify-center items-center order-7'
        >
          <Image src="/images/image_landing2.svg" className='2xl:w-[400] xs:w-[280px] w-full' width={400} height={400} alt="" />
        </motion.div>

        <motion.div 
          initial={{ y: 200, opacity: 0}}
          animate={first_section_view? { y: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.7 } : {}}
          className='flex items-center order-8'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl sm:text-3xl xs:text-xl text-lg font-bold mr-2 sm:p-3 p-2 rounded-lg bg-mainBlue_light'>Custom </p>
              <p className='2xl:text-4xl sm:text-3xl xs:text-xl text-lg'>development</p>
            </div>

            <p className='2xl:text-lg sm:text-base text-sm !leading-relaxed mb-6'>
              We specialize in creating bespoke software solutions that cater to your specific requirements. 
              Whether you need a web application, mobile app, or desktop software, our experts are here to build it from the ground up.
            </p>

            {/* <div className='2xl:w-28 w-20 2xl:h-10 h-8'>
              <Button
                style={
                  { 
                      fontSize: 'text-lg', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainBlue', 
                      hoveredBgColor: 'hover:bg-mainYellow'
                  }
                }
                handleClick={()=>{}}
              >
                  {"More"}
              </Button>
            </div> */}
          </div>
        </motion.div>

        <motion.div 
          initial={{ x:-200, opacity: 0}}
          animate={first_section_view? { x: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center order-9'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl sm:text-3xl xs:text-xl text-lg font-bold mr-2 sm:p-3 p-2 rounded-lg bg-mainBlue_light'>Software</p>
              <p className='2xl:text-4xl sm:text-3xl xs:text-xl text-lg'>consultation</p>
            </div>

            <p className='2xl:text-lg sm:text-base text-sm mb-6 !leading-relaxed'>
              Not sure where to start?
              We provide expert consultation to help you define your project scope, choose the right technologies, and develop a strategic roadmap for success.
            </p>

            {/* <div className='2xl:w-28 w-20 2xl:h-10 h-8'>
              <Button
                style={
                  { 
                      fontSize: '2xl:text-lg', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainBlue', 
                      hoveredBgColor: 'hover:bg-mainYellow'
                  }
                }
                handleClick={()=>{}}
              >
                  {"More"}
              </Button>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
